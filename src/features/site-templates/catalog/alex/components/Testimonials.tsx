'use client'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useState, useRef, useEffect, useSyncExternalStore } from 'react'
import { testimonials } from '../content/data'
import { asset } from '../config/brand'
import { SectionTitle } from './Motion'
import type { TemplateLocale } from '../../../types'
const subscribe=(listener:()=>void)=>{window.addEventListener('resize',listener);return()=>window.removeEventListener('resize',listener)}
const getWidth=()=>window.innerWidth,serverWidth=()=>1280
// 环形轨道从真实条目数计算，手动切换与自动播放共用同一索引。
export function Testimonials({locale}:{locale:TemplateLocale}) {
 const [index,setIndex]=useState(0),[paused,setPaused]=useState(false),ref=useRef<HTMLElement>(null),visible=useInView(ref,{amount:.2}),reduced=useReducedMotion(),count=testimonials.length,width=useSyncExternalStore(subscribe,getWidth,serverWidth)
 useEffect(()=>{if(paused||!visible||reduced||count<2)return;const timer=setInterval(()=>setIndex(i=>(i+1)%count),5200);return()=>clearInterval(timer)},[paused,visible,reduced,count])
 // 三端轨道参数与原站一致，手机不显示侧卡，宽度由窗口实时计算。
 const layout=(offset:number)=>{
  if(width>=1200){
   if(offset===0)return{x:0,width:760,height:380,opacity:1,scale:1}
   return{x:Math.sign(offset)*(Math.abs(offset)===1?455:562),width:Math.abs(offset)===1?105:70,height:Math.abs(offset)===1?290:190,opacity:Math.abs(offset)>2?0:Math.abs(offset)===1?.75:.5,scale:1}
  }
  if(width>=768){
   const centerWidth=width>=1024?640:Math.min(Math.max(480,width-160),560),distance=centerWidth/2+65
   if(offset===0)return{x:0,width:centerWidth,height:390,opacity:1,scale:1}
   return{x:Math.sign(offset)*(distance+(Math.abs(offset)>1?80:0)),width:Math.abs(offset)===1?85:60,height:Math.abs(offset)===1?250:180,opacity:Math.abs(offset)===1?.72:0,scale:Math.abs(offset)===1?1:.7}
  }
  return offset===0?{x:0,width:Math.min(width-32,460),height:380,opacity:1,scale:1}:{x:offset>0?320:-320,width:80,height:240,opacity:0,scale:.6}
 }
 const move=(step:number)=>setIndex(i=>(i+step+count)%count)
 return <section ref={ref} id="testimonials" className="ax-section ax-testimonials" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocus={()=>setPaused(true)} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node))setPaused(false)}}><div className="ax-wrap"><SectionTitle label={locale==='zh'?'客户的故事':'CLIENT STORIES'} text={locale==='zh'?'真实客户 切实成果':'REAL CLIENTS. REAL RESULTS.'}/></div><div className="ax-testimonial-stage" aria-live={paused?'polite':'off'}>{testimonials.map((t,i)=>{let offset=(i-index+count)%count;if(offset>count/2)offset-=count;const center=offset===0;return <motion.div key={t.name} className={`ax-testimonial ${center?'is-center':''}`} style={{zIndex:center?10:5-Math.abs(offset)}} initial={false} animate={layout(offset)} transition={{x:{duration:reduced?0:.88,ease:[.22,1,.36,1]},width:{duration:reduced?0:.46,delay:reduced?0:.36},height:{duration:reduced?0:.46,delay:reduced?0:.36},opacity:{duration:.45}}} aria-hidden={!center}>{center?<div className="ax-testimonial-content"><span className="ax-rating">{t.rating} <span aria-label={locale==='zh'?'五星':'5 stars'}>★★★★★</span></span><h3>{t.title[locale]}</h3><p>“{t.quote[locale]}”</p><div className="ax-testimonial-author"><div><strong>{t.name}</strong><small>{t.role[locale]}</small></div><img src={asset(`avatar-${t.photo}.png`)} alt={t.name}/></div></div>:<img className="ax-testimonial-avatar" src={asset(`avatar-${t.photo}.png`)} alt=""/>}</motion.div>})}</div><div className="ax-carousel-controls"><button onClick={()=>move(-1)} aria-label={locale==='zh'?'上一条评价':'Previous testimonial'}>‹</button><div>{testimonials.map((t,i)=><button key={t.name} className={i===index?'is-active':''} onClick={()=>setIndex(i)} aria-label={locale==='zh'?`查看第 ${i+1} 条评价`:`Go to slide ${i+1}`} aria-current={i===index?'true':undefined}/>)}</div><button onClick={()=>move(1)} aria-label={locale==='zh'?'下一条评价':'Next testimonial'}>›</button><button className="ax-pause" onClick={()=>setPaused(!paused)} aria-pressed={paused}>{paused?(locale==='zh'?'播放':'Play'):(locale==='zh'?'暂停':'Pause')}</button></div><p className="ax-demo-label">{locale==='zh'?'客户故事仅用于模板演示':'Client stories are template demonstrations'}</p></section>
}

