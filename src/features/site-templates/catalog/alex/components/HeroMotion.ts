export function heroGeometry(width: number, height: number) {
  const mobile = width < 768
  const expandedWidth = Math.max(280, width - (mobile ? 48 : width < 1024 ? 96 : 180))
  const expandedHeight = expandedWidth / 5.188
  const collapsedHeight = mobile ? 18 : 22
  return {
    expandedWidth, expandedHeight, collapsedHeight,
    collapsedWidth: 5.188 * collapsedHeight,
    expandedTop: Math.max(140, height - expandedHeight - (mobile ? 12 : 20)),
    collapsedTop: ((mobile ? 56 : 64) - collapsedHeight) / 2,
    scrollDistance: Math.min(500, Math.max(280, .55 * height)),
    directionThreshold: Math.min(500, Math.max(280, .65 * height)),
  }
}
