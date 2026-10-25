'use client'
import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { copy, services } from '../content/data'
import { asset } from '../config/brand'
import { SectionTitle, Letters } from './Motion'
import type { TemplateLocale } from '../../../types'
export function Services({locale,details}:{locale:TemplateLocale;details:(i:number)=>void}) {
 const [active,setActive]=useState<number|null>(0),reduced=useReducedMotion()
 return <section id="services" className="ax-section ax-wrap"><SectionTitle label={locale==='zh'?'03 法律服务':'03 OUR LEGAL SERVICES'} text={copy.serviceTitle[locale]} description={copy.serviceText[locale]}/><div className="ax-services">{services.map((s,i)=><div className={`ax-service ${active===i?'is-active':''}`} key={s.id}><div className="ax-service-main"><button className="ax-service-toggle" onClick={()=>setActive(active===i?null:i)} aria-expanded={active===i} aria-controls={`ax-service-${s.id}`}><span className="ax-eyebrow">0{i+1}. {s.name[locale]}</span><h3><Letters text={s.title[locale]}/></h3><span className="ax-plus" aria-hidden="true">{active===i?'−':'+'}</span></button><ul className="ax-check-list">{s.bullets.map(b=><li key={b.en}>{b[locale]}</li>)}</ul><button className="ax-text-button" onClick={()=>details(i)}>{locale==='zh'?'查看详情':'SEE DETAILS'}</button><div className="ax-tags">{s.tags.map(t=><span key={t.en}>{t[locale]}</span>)}</div></div><AnimatePresence initial={false}>{active===i&&<motion.div id={`ax-service-${s.id}`} className="ax-service-images" initial={reduced?false:{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{height:{duration:reduced?0:.65,ease:[.19,1,.22,1]},opacity:{duration:reduced?0:.5}}}>{s.photos.map((p,j)=><motion.figure key={p} initial={reduced?false:{y:14,opacity:0,scale:.98}} animate={{y:0,opacity:1,scale:1}} transition={{duration:.6,delay:.08+j*.09}}><img src={asset(`photo-${p}.jpg`)} alt={s.title[locale]}/><figcaption>{s.name[locale]} · {String(j+1).padStart(2,'0')}</figcaption></motion.figure>)}</motion.div>}</AnimatePresence></div>)}</div></section>
}
