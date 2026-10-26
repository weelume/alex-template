import type { TargetAndTransition, Transition } from 'framer-motion'

export interface CardLayout {
  x: number
  width: number
  height: number
  opacity: number
  scale: number
  visible: boolean
}

export interface PlaybackState {
  manualPaused: boolean
  resumeOverride: boolean
  hovered: boolean
  focused: boolean
  visible: boolean
  documentHidden: boolean
  reduced: boolean
}

export function isPlaybackPaused(state: PlaybackState): boolean {
  return state.manualPaused || !state.visible || state.documentHidden || state.reduced ||
    (!state.resumeOverride && (state.hovered || state.focused))
}

export function relativeOffset(item: number, current: number, count: number): number {
  if (!Number.isInteger(count) || count < 1) throw new RangeError('评价数量必须为正整数')
  const offset = ((item - current) % count + count) % count
  return offset > count / 2 ? offset - count : offset
}

export function cardLayout(offset: number, width: number): CardLayout {
  const distance = Math.abs(offset)
  if (width >= 1200) {
    if (offset === 0) return { x: 0, width: 760, height: 380, opacity: 1, scale: 1, visible: true }
    return {
      x: Math.sign(offset) * (distance === 1 ? 455 : 562 + Math.max(0, distance - 2) * 45),
      width: distance === 1 ? 105 : 70, height: distance === 1 ? 290 : 190,
      opacity: distance > 2 ? 0 : distance === 1 ? .75 : .5, scale: 1, visible: distance <= 2,
    }
  }
  if (width >= 768) {
    const centerWidth = width >= 1024 ? 640 : Math.min(Math.max(480, width - 160), 560)
    if (offset === 0) return { x: 0, width: centerWidth, height: 390, opacity: 1, scale: 1, visible: true }
    return {
      x: Math.sign(offset) * (centerWidth / 2 + 65 + (distance > 1 ? 80 : 0)),
      width: distance === 1 ? 85 : 60, height: distance === 1 ? 250 : 180,
      opacity: distance === 1 ? .72 : 0, scale: distance === 1 ? 1 : .7, visible: distance === 1,
    }
  }
  return offset === 0
    ? { x: 0, width: Math.min(width - 32, 460), height: 380, opacity: 1, scale: 1, visible: true }
    : { x: offset > 0 ? 320 : -320, width: 80, height: 240, opacity: 0, scale: .6, visible: false }
}

// 跨过轨道背面时先淡出再换边，避免隐藏卡片横穿中央正文。
export function cardMotion(item: number, current: number, previous: number, count: number, width: number, reduced: boolean): {
  layout: CardLayout; animate: TargetAndTransition; transition: Transition
} {
  const offset = relativeOffset(item, current, count), previousOffset = relativeOffset(item, previous, count)
  const next = cardLayout(offset, width), before = cardLayout(previousOffset, width)
  const entering = previousOffset !== 0 && offset === 0
  const leaving = previousOffset === 0 && offset !== 0
  const crossesBack = current !== previous && before.x * next.x < 0 &&
    (Math.abs(previousOffset) >= 2 || Math.abs(offset) >= 2)
  const ease: [number, number, number, number] = [.22, 1, .36, 1]
  const duration = reduced ? 0 : .88
  const size: Transition = entering
    ? { duration: reduced ? 0 : .46, delay: reduced ? 0 : .36, ease }
    : leaving ? { duration: reduced ? 0 : .36, ease: [.32, 0, .67, 0] }
    : { duration, ease }
  return {
    layout: next,
    animate: {
      x: crossesBack && !reduced
        ? [before.x, before.x + Math.sign(before.x) * 45, next.x + Math.sign(next.x) * 45, next.x]
        : next.x,
      opacity: crossesBack && !reduced ? [before.opacity, 0, 0, next.opacity] : next.opacity,
      width: next.width, height: next.height, scale: next.scale,
      zIndex: offset === 0 ? 30 : leaving ? 25 : Math.abs(offset) === 1 ? 20 : 10,
    },
    transition: {
      x: crossesBack ? { duration, times: [0, .38, .42, 1], ease: 'linear' } : { duration, ease },
      opacity: crossesBack ? { duration, times: [0, .36, .44, 1], ease: 'linear' }
        : { duration: reduced ? 0 : .45, ease: 'easeInOut' },
      width: size, height: size, scale: { duration, ease },
    },
  }
}
