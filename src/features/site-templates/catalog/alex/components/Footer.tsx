'use client'
import Link from 'next/link'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useState } from 'react'
import { copy } from '../content/data'
import { useAlexHost } from '../host'
import { asset, brand } from '../config/brand'
import { ease } from './Motion'
import type { TemplateLocale } from '../../../types'
export function Footer({locale,home}:{locale:TemplateLocale;home:string}) {
 const ref=useRef<HTMLDivElement>(null),visible=useInView(ref,{amount:.2}),reduced=useReducedMotion(),host=useAlexHost(),[pointer,setPointer]=useState({x:0,y:0}),[hover,setHover]=useState(false)
 return <footer className="ax-footer"><div className="ax-footer-ticker" tabIndex={0} aria-label={locale==='zh'?'法律咨询循环文字':'Legal consultation marquee'}><div>{Array.from({length:8},(_,i)=><span key={i}>{locale==='zh'?'让我们聊聊法律':'LET’S TALK LAW'} · </span>)}</div></div><div ref={ref} className="ax-wrap ax-footer-main" onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();setPointer({x:e.clientX-r.left+18,y:e.clientY-r.top+18})}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}><motion.div className="ax-footer-portrait" initial={reduced?false:{y:220,opacity:0,scale:.92}} animate={visible||reduced?{y:0,opacity:1,scale:1}:{y:220,opacity:0,scale:.92}} transition={{duration:reduced?0:1.6,ease}}><img src={asset('portrait.webp')} alt={host.brandName[locale]}/><Link className="ax-button" href={`${home}#contact`}>{copy.book[locale]}</Link></motion.div><div><p className="ax-eyebrow">{host.brandName[locale]}</p><h2 aria-label={copy.footer[locale]}>{Array.from(copy.footer[locale]).map((char,i)=><motion.span key={i} aria-hidden="true" style={{display:'inline-block',whiteSpace:'pre'}} initial={false} animate={visible||reduced?{y:reduced?0:[25,-12,0],opacity:1}:{y:35,opacity:0}} transition={{duration:reduced?0:.7,delay:reduced?0:i*.04,ease}}>{char}</motion.span>)}</h2><nav>{copy.nav.map((item,i)=><Link key={i} href={`${home}#${copy.anchors[i]}`}>{item[locale]}</Link>)}</nav><p className="ax-muted">{copy.disclaimer[locale]}</p><p>© {brand.year} {host.brandName[locale]}</p>{host.filing}</div>{!reduced&&<motion.div className="ax-footer-follower" aria-hidden="true" animate={{x:pointer.x,y:pointer.y,scale:hover?1:.7,opacity:hover?1:0}} transition={{type:'spring',damping:22,stiffness:240,mass:.5,opacity:{duration:.2}}}>{copy.book[locale]}</motion.div>}</div></footer>
}
