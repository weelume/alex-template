import { test } from 'node:test'
import assert from 'node:assert/strict'
import { heroGeometry } from '../src/features/site-templates/catalog/alex/components/HeroMotion.ts'

test('desktop identity contracts into navigation without leaving a full-size fixed layer', () => {
  const geometry = heroGeometry(1440, 1000)
  assert.equal(geometry.expandedWidth, 1260)
  assert.equal(geometry.collapsedHeight, 22)
  assert.equal(geometry.collapsedTop, 21)
  assert.ok(geometry.collapsedWidth < 120)
  assert.equal(geometry.scrollDistance, 500)
  assert.ok(geometry.expandedTop + geometry.expandedHeight < 1000)
})
test('viewport-derived scroll range is bounded on short and tall screens', () => {
  assert.equal(heroGeometry(390, 300).scrollDistance, 280)
  assert.equal(heroGeometry(834, 1800).scrollDistance, 500)
  assert.equal(heroGeometry(390, 844).expandedWidth, 342)
  assert.equal(heroGeometry(834, 1180).expandedWidth, 738)
})
