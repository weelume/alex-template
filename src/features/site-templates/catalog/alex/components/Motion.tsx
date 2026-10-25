'use client'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
export const ease = [0.16, 1, 0.3, 1] as const
export function Reveal({children,className='',delay=0,x=0,y=24,scale=1}:{children:ReactNode;className?:string;delay?:number;x?:number;y?:number;scale?:number}) {
 const reduced=useReducedMotion()
 return <motion.div className={className} initial={reduced?false:{opacity:0,x,y,scale,filter:'blur(8px)'}} whileInView={{opacity:1,x:0,y:0,scale:1,filter:'blur(0px)'}} viewport={{amount:.15,once:false}} transition={{duration:reduced?0:.85,delay:reduced?0:delay,ease}}>{children}</motion.div>
}
// 保留原站逐字模糊揭示与错峰，不以整段淡入替代；中文按语义换行。
export function Letters({text,className='',stagger=.025}:{text:string;className?:string;stagger?:number}) {
 const reduced=useReducedMotion()
 return <motion.span aria-label={text} className={`ax-letters ${className}`} initial={reduced?false:'hidden'} whileInView="visible" viewport={{once:false,amount:.15}} variants={{hidden:{},visible:{transition:{staggerChildren:reduced?0:stagger}}}}>{text.split('\n').map((line,l)=><span className="ax-line" key={l} aria-hidden="true">{line.split(' ').map((word,w)=><span className="ax-word" key={w}>{Array.from(word).map((char,c)=><motion.span key={c} variants={{hidden:{opacity:0,y:6,filter:'blur(8px)'},visible:{opacity:1,y:0,filter:'blur(0px)',transition:{duration:reduced?0:.45,ease:[.2,.65,.3,.9]}}}}>{char}</motion.span>)}{' '}</span>)}</span>)}</motion.span>
}
export function SectionTitle({label,text,description}:{label?:string;text:string;description?:string}) {return <div className="ax-section-heading">{label&&<Reveal x={-20} y={0}><p className="ax-eyebrow">{label}</p></Reveal>}<h2><Letters text={text}/></h2>{description&&<Reveal delay={.12}><p className="ax-muted">{description}</p></Reveal>}</div>}
