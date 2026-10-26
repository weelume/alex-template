'use client'
import { createContext, useContext, useRef, useState, useSyncExternalStore, type ReactNode } from 'react'
import { useScroll, useMotionValueEvent, useReducedMotion, type MotionValue } from 'framer-motion'
import { heroGeometry } from './HeroMotion'

const resize = (listener: () => void) => { window.addEventListener('resize', listener); return () => window.removeEventListener('resize', listener) }
const getWidth = () => window.innerWidth
const getHeight = () => window.innerHeight
const serverWidth = () => 1280
const serverHeight = () => 800
interface HeaderMotionState { scroll: MotionValue<number>; width: number; height: number; hidden: boolean; scrolled: boolean }
const Context = createContext<HeaderMotionState | null>(null)

export function HeaderMotionProvider({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll(), reduced = useReducedMotion(), previous = useRef(0)
  const width = useSyncExternalStore(resize, getWidth, serverWidth)
  const height = useSyncExternalStore(resize, getHeight, serverHeight)
  const [state, setState] = useState({ hidden: false, scrolled: false })
  useMotionValueEvent(scrollY, 'change', value => {
    const delta = value - previous.current, geometry = heroGeometry(width, height)
    previous.current = value
    setState(current => {
      // 保留原站的滚动方向与阈值规则；菜单打开时由宿主显式保持导航可操作。
      const hidden = reduced || value <= geometry.directionThreshold || delta > 4 ? false : delta < -4 ? true : current.hidden
      const scrolled = value > .95 * geometry.scrollDistance
      return current.hidden === hidden && current.scrolled === scrolled ? current : { hidden, scrolled }
    })
  })
  return <Context.Provider value={{ scroll: scrollY, width, height, ...state, hidden: reduced ? false : state.hidden }}>{children}</Context.Provider>
}

export function useHeaderMotion() {
  const state = useContext(Context)
  if (!state) throw new Error('HeaderMotion 必须在模板页面布局内使用')
  return state
}
