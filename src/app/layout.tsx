import type { ReactNode } from 'react'
import './globals.css'
export const metadata={title:'Alex · 法律顾问',description:'专业法律顾问 · 双语响应式作品集'}
export default function Layout({children}:{children:ReactNode}){return <html lang="zh-CN" data-scroll-behavior="smooth"><body>{children}</body></html>}
