'use client'
import { useState } from 'react'
import { copy, plans } from '../content/data'
import { SectionTitle, Reveal } from './Motion'
import type { TemplateLocale } from '../../../types'
export function Pricing({locale,book}:{locale:TemplateLocale;book:()=>void}) {
 const [active,setActive]=useState(1)
 return <section id="pricing" className="ax-section ax-wrap"><SectionTitle label={locale==='zh'?'服务方案':'PRICING'} text={copy.pricingTitle[locale]} description={copy.pricingText[locale]}/><div className="ax-pricing-grid">{plans.map((p,i)=><Reveal className={`ax-plan ${active===i?'is-active':''}`} key={p.name.en} delay={.3+i*.15} y={35} scale={.97}><div onMouseEnter={()=>setActive(i)} onMouseLeave={()=>setActive(1)} onFocus={()=>setActive(i)}><p className="ax-eyebrow">{p.name[locale]}</p><h3>{p.price[locale]}</h3><p className="ax-muted">{p.text[locale]}</p><button className="ax-button" onClick={book}>{i===0?copy.book[locale]:(locale==='zh'?'开始了解服务':'Get Started Today')}</button><h4>{locale==='zh'?'服务包含':'What’s Included:'}</h4><ul className="ax-check-list">{p.features.map(f=><li key={f.en}>{f[locale]}</li>)}</ul></div></Reveal>)}</div></section>
}
