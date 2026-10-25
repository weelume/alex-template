'use client'
import Link from 'next/link'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { copy } from '../content/data'
import { useAlexHost } from '../host'
import { asset } from '../config/brand'
import { Letters, Reveal, ease } from './Motion'
import type { TemplateLocale } from '../../../types'
export function Hero({locale,book}:{locale:TemplateLocale;book:()=>void}) {
 const host=useAlexHost(),ref=useRef<HTMLElement>(null),reduced=useReducedMotion(),{scrollYProgress}=useScroll({target:ref,offset:['start start','end start']}),y=useTransform(scrollYProgress,[0,1],[0,180])
 return <><section ref={ref} id="home" className="ax-hero"><motion.img className="ax-hero-bg" src={asset('hero.webp')} alt={locale==='zh'?'律师与正义女神像':'Alex Carter – Senior Business Lawyer'} style={{y:reduced?0:y}}/><div className="ax-hero-shade"/><div className="ax-wrap ax-hero-content"><div><h1><Letters text={copy.hero[locale]}/></h1><Reveal delay={.35}><p className="ax-purpose"><span aria-hidden="true">▥</span>{copy.purpose[locale]}</p></Reveal></div><Reveal x={30} delay={.4} className="ax-badge"><span className="ax-scales" aria-hidden="true">⚖</span><small>{locale==='zh'?'专业 · 责任 · 信任':'MEMBER OF THE'}</small><strong>{copy.badge[locale]}</strong><ul>{copy.promises.map(p=><li key={p.en}>{p[locale]}</li>)}</ul></Reveal></div><motion.div className="ax-hero-name ax-wrap" initial={reduced?false:{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1.4,delay:.4,ease}}><div className="ax-name-word">{host.logo?host.brandName[locale]:'ALEX-CARTER'}</div><motion.button className="ax-tilted ax-button" onClick={book} whileHover={reduced?undefined:{rotate:0,scale:1.05}} whileTap={{scale:.97}}>{copy.book[locale]}</motion.button></motion.div></section><section className="ax-intro"><div className="ax-logos" tabIndex={0} aria-label={locale==='zh'?'合作品牌循环展示':'Partner brands marquee'}><div>{Array.from({length:4},(_,i)=><span className="ax-logo-set" key={i}>{['45 Degrees°','Acme Corp','Codecraft_','Convergence','Lightspeed','Luminary'].map((n,j)=><span key={n}><b aria-hidden="true">{['◒','✳','▦','◈','▤','✹'][j]}</b>{n}</span>)}</span>)}</div></div><div className="ax-wrap ax-intro-copy"><Reveal><h2>{copy.trusted[locale]}</h2></Reveal><Reveal delay={.2}><p className="ax-muted">{copy.intro[locale]}</p></Reveal></div><Link className="ax-skip" href="#aboutme">{locale==='zh'?'继续了解':'Explore the practice'}</Link></section></>
}
