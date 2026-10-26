import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cardLayout, cardMotion, isPlaybackPaused, relativeOffset } from '../src/features/site-templates/catalog/alex/components/CarouselMotion.ts'

test('manual pause survives pointer exit and focus loss; explicit play overrides current interaction pause', () => {
  const state = { manualPaused: true, resumeOverride: false, hovered: false, focused: false, visible: true, documentHidden: false, reduced: false }
  assert.equal(isPlaybackPaused(state), true)
  assert.equal(isPlaybackPaused({ ...state, manualPaused: false, focused: true }), true)
  assert.equal(isPlaybackPaused({ ...state, manualPaused: false, resumeOverride: true, focused: true, hovered: true }), false)
  assert.equal(isPlaybackPaused({ ...state, manualPaused: false, resumeOverride: true, documentHidden: true }), true)
  assert.equal(isPlaybackPaused({ ...state, manualPaused: false, resumeOverride: true, reduced: true }), true)
})
test('ring remains continuous at first and last slides and accepts one-item collections', () => {
  assert.equal(relativeOffset(0, 9, 10), 1)
  assert.equal(relativeOffset(9, 0, 10), -1)
  assert.equal(relativeOffset(0, 0, 1), 0)
  assert.throws(() => relativeOffset(0, 0, 0), RangeError)
})
test('desktop, tablet and mobile retain reference visible-card counts and center dimensions', () => {
  for (const [width, cards, center] of [[1440, 5, [760, 380]], [834, 3, [560, 390]], [390, 1, [358, 380]], [320, 1, [288, 380]]]) {
    const layouts = Array.from({ length: 10 }, (_, item) => cardLayout(relativeOffset(item, 0, 10), width))
    assert.equal(layouts.filter(card => card.visible).length, cards)
    assert.deepEqual([layouts[0].width, layouts[0].height], center)
  }
})
test('outgoing center shrinks before incoming center expands and back-crossing cards are invisible at teleport', () => {
  const leaving = cardMotion(0, 1, 0, 10, 1440, false)
  const entering = cardMotion(1, 1, 0, 10, 1440, false)
  assert.equal(leaving.transition.width.duration, .36)
  assert.equal(entering.transition.width.delay, .36)
  assert.equal(entering.transition.width.duration, .46)
  const crossing = cardMotion(2, 5, 0, 10, 1440, false)
  assert.ok(Array.isArray(crossing.animate.x))
  assert.deepEqual(crossing.animate.opacity.slice(1, 3), [0, 0])
  const reduced = cardMotion(2, 5, 0, 10, 1440, true)
  assert.equal(typeof reduced.animate.x, 'number')
  assert.equal(reduced.transition.x.duration, 0)
})
