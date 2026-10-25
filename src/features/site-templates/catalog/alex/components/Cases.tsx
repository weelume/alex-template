'use client'
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { cases, copy } from '../content/data'
import { asset } from '../config/brand'
import type { TemplateLocale } from '../../../types'
function Card({index,locale,progress}:{index:number;locale:TemplateLocale;progress:MotionValue<number>}) {
 const item=cases[index],blur=useTransform(progress,[Math.max(0,index*.12-.1),index*.12+.14],['blur(12px)','blur(0px)']),y=useTransform(progress,[Math.max(0,index*.12-.1),index*.12+.14],[36,0]),reduced=useReducedMotion()
 return <motion.div className={`ax-case ax-case-${index}`} style={reduced?{}:{filter:blur,y}}><Link href="#contact"><div className="ax-case-img"><img src={asset(`photo-${item.photo}.jpg`)} alt={item.title[locale]}/></div><div className="ax-case-copy"><span className="ax-eyebrow">0{index+1} / {item.tag[locale]}</span><h3>{item.title[locale]}</h3><p>{item.text[locale]}</p></div></Link></motion.div>
}
export function Cases({locale}:{locale:TemplateLocale}) {
 const ref=useRef<HTMLElement>(null),mobileTrack=useRef<HTMLDivElement>(null),leftTrack=useRef<HTMLDivElement>(null),rightTrack=useRef<HTMLDivElement>(null),[size,setSize]=useState({mobile:false,width:1440,height:1000,track:2800,left:2400,right:1900}),reduced=useReducedMotion(),{scrollYProgress}=useScroll({target:ref,offset:['start start','end end']})
 // 字号、语言和视口都会改变轨道长度，必须测量内容，避免固定终点造成末段空白。
 useEffect(()=>{const update=()=>setSize({mobile:window.innerWidth<1024,width:window.innerWidth,height:window.innerHeight,track:mobileTrack.current?.scrollWidth||2800,left:leftTrack.current?.scrollHeight||2400,right:rightTrack.current?.scrollHeight||1900});update();window.addEventListener('resize',update);const observer=new ResizeObserver(update);for(const node of [mobileTrack.current,leftTrack.current,rightTrack.current])if(node)observer.observe(node);return()=>{window.removeEventListener('resize',update);observer.disconnect()}},[size.mobile])
 const leftY=useTransform(scrollYProgress,[0,1],[size.height*.36,-Math.max(0,size.left-size.height*.85)]),rightY=useTransform(scrollYProgress,[0,1],[0,-Math.max(0,size.right-size.height*.85)]),x=useTransform(scrollYProgress,[0,1],[size.width*.5,-Math.max(0,size.track-size.width+32)]),headingOpacity=useTransform(scrollYProgress,[0,.2],[1,0]),headingScale=useTransform(scrollYProgress,[0,.2],[1,.94])
 return <section id="cases" ref={ref} className={`ax-cases ${reduced?'ax-static-cases':''}`}><div className="ax-cases-sticky"><motion.div className="ax-cases-title ax-wrap" style={reduced?{}:{opacity:headingOpacity,scale:headingScale}}><p className="ax-eyebrow">{locale==='zh'?'精选案例':'SELECTED CASE STUDIES'}</p><h2>{copy.caseTitle[locale]}</h2><span>2K26 · CASE DOSSIER</span></motion.div>{size.mobile?<motion.div ref={mobileTrack} className="ax-case-horizontal" style={{x:reduced?0:x}}>{cases.map((_,i)=><Card key={i} index={i} locale={locale} progress={scrollYProgress}/>)}</motion.div>:<div className="ax-case-columns ax-wrap"><motion.div ref={leftTrack} style={{y:reduced?0:leftY}}>{[0,2,4,6].map(i=><Card key={i} index={i} locale={locale} progress={scrollYProgress}/>)}</motion.div><motion.div ref={rightTrack} style={{y:reduced?0:rightY}}>{[1,3,5].map(i=><Card key={i} index={i} locale={locale} progress={scrollYProgress}/>)}</motion.div></div>}<Link className="ax-cases-all ax-button" href="#contact">{locale==='zh'?`咨询这些服务 (${cases.length})`:`DISCUSS A CASE (${cases.length})`}</Link></div></section>
}

