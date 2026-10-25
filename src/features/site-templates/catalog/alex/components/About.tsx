'use client'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { copy } from '../content/data'
import { asset } from '../config/brand'
import { SectionTitle, Letters, Reveal } from './Motion'
import type { TemplateLocale } from '../../../types'
export function About({locale,story}:{locale:TemplateLocale;story:()=>void}) {
 const ref=useRef<HTMLDivElement>(null),{scrollYProgress}=useScroll({target:ref,offset:['start 92%','center 45%']}),clipPath=useTransform(scrollYProgress,[0,1],['inset(0% 0% 100% 0%)','inset(0% 0% 0% 0%)']),opacity=useTransform(scrollYProgress,[0,.15,1],[.1,.6,1]),reduced=useReducedMotion()
 return <section id="aboutme" className="ax-section ax-wrap"><SectionTitle label={locale==='zh'?'(01) 关于我':'(01) ABOUT ME'} text={copy.about[locale]}/><div className="ax-about-grid"><div ref={ref} className="ax-about-photo"><motion.div style={reduced?{}:{clipPath,opacity}}><img src={asset('portrait.webp')} alt={locale==='zh'?'亚历克斯 法律顾问':'Alex Carter – Legal Counsel'}/></motion.div><p>{locale==='zh'?'专注法律 服务于人':'ALEX CARTER · ATTORNEY AT LAW'}</p></div><div className="ax-philosophy"><Reveal><p className="ax-eyebrow">{locale==='zh'?'（我的理念）':'(MY PHILOSOPHY)'}</p></Reveal><blockquote>“<Letters text={copy.philosophy[locale]}/>”</blockquote><Reveal delay={.2}><p className="ax-muted">{copy.philosophyText[locale]}</p></Reveal><Reveal delay={.3} x={20}><button className="ax-button ax-button-outline" onClick={story}>{locale==='zh'?'了解我的故事':'SEE MY STORY'}</button></Reveal></div></div></section>
}
