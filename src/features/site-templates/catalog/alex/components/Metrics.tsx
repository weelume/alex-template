'use client'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { copy } from '../content/data'
import { asset } from '../config/brand'
import { Letters, Reveal, ease } from './Motion'
import type { TemplateLocale } from '../../../types'
function Digit({value,reverse=false,active,delay}:{value:number;reverse?:boolean;active:boolean;delay:number}) {
 const reduced=useReducedMotion(),numbers=Array.from({length:11},(_,i)=>reverse?10-i:i),end=reverse?10-value:value
 return <span className="ax-digit" aria-hidden="true"><motion.span animate={{y:`${-(reduced||active?end:reverse?10:0)*100/11}%`}} transition={{duration:reduced?0:1.85,delay:reduced?0:delay,ease}}>{numbers.map((n,i)=><span key={i}>{n%10}</span>)}</motion.span></span>
}
export function Metrics({locale}:{locale:TemplateLocale}) {
 const ref=useRef<HTMLElement>(null),active=useInView(ref,{amount:.25,once:false})
 return <section ref={ref} id="metrics" className="ax-metrics ax-section ax-wrap"><Reveal y={-16}><p className="ax-eyebrow">{locale==='zh'?'以专业守护每一步':'THE COUNSEL WAY'}</p></Reveal><div className="ax-justice"><span aria-hidden="true">{locale==='zh'?'正义':'JUSTICE'}</span><Reveal scale={.94} y={25} delay={.15}><img src={asset('cutout.webp')} alt={locale==='zh'?'专注的法律顾问':'Alex Carter – Senior Legal Counsel'}/></Reveal></div><h2><Letters text={copy.metricTitle[locale]}/></h2><Reveal delay={.25}><p className="ax-muted">{copy.metricText[locale]}</p></Reveal><div className="ax-metric-grid">{[{value:15,suffix:'+',label:locale==='zh'?'年专业经验':'Years of Experience'},{value:98,suffix:'%',label:locale==='zh'?'客户成功率':'Client Success Rate'},{value:50,suffix:'M+',label:locale==='zh'?'客户追回金额（美元）':'In Client Recoveries'}].map((m,i)=><div key={m.label}><div className="ax-number" aria-label={`${i===2?'$':''}${m.value}${m.suffix}`}>{i===2&&<span>$</span>}{String(m.value).split('').map((v,j)=><Digit key={j} value={Number(v)} reverse={j===0} active={active} delay={.35+i*.1+j*.05}/>)}<span>{m.suffix}</span></div><p>{m.label}</p></div>)}</div><small className="ax-muted">{locale==='zh'?'以上为原模板演示指标，不代表实际服务承诺。':'Original template demonstration metrics; not a promise of results.'}</small></section>
}
