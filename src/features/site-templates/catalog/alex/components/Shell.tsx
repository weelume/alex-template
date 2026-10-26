'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState, useEffect, type ReactNode } from 'react'
import { useAlexHost } from '../host'
import { asset, brand } from '../config/brand'
import { Footer } from './Footer'
import { HeaderMotionProvider, useHeaderMotion } from './HeaderMotion'
import { copy } from '../content/data'
import type { SiteTemplatePageProps } from '../../../types'
import '../theme.css'
function ShellBody({children,locale='zh',basePath}:SiteTemplatePageProps&{children:ReactNode}) {
 const host=useAlexHost(),pathname=usePathname(),router=useRouter(),[menu,setMenu]=useState(false),reduced=useReducedMotion()
 const home=basePath||'/',name=host.brandName[locale]
 const headerMotion=useHeaderMotion(), hideHeader=headerMotion.hidden && headerMotion.scrolled && !menu
 const root=locale==='en'?basePath.replace(/\/en$/,''):basePath
 const languageHref=((locale==='zh'?`${root}/en`:root)+pathname.slice(basePath.length).replace(/^\/$/,''))||'/'
 useEffect(()=>{if(!menu)return;const overflow=document.body.style.overflow;document.body.style.overflow='hidden';const key=(e:KeyboardEvent)=>{if(e.key==='Escape')setMenu(false)};document.addEventListener('keydown',key);return()=>{document.body.style.overflow=overflow;document.removeEventListener('keydown',key)}},[menu])
 return <div className="ax-site" lang={locale==='zh'?'zh-CN':'en'}><header className={`ax-header ax-wrap ${headerMotion.scrolled ? 'is-scrolled' : ''}`} style={{transform:hideHeader?'translateY(-110%)':'translateY(0)',opacity:hideHeader?0:1,pointerEvents:hideHeader?'none':'auto'}}><Link href={`${home}#home`} aria-label={locale==='zh'?'返回首页':'Back to home'} className="ax-brand">{host.logo?<img src={host.lightLogo||host.logo} alt={name}/>:<img src={asset('logo.svg')} alt="Alex Carter"/>}<span>{name}</span></Link><div className="ax-header-tools"><Link href={languageHref} onClick={e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();router.push(languageHref+window.location.search+window.location.hash)}} aria-label={locale==='zh'?'Switch to English':'切换到中文'}>{locale==='zh'?'EN':'中文'}</Link><button aria-label={menu?(locale==='zh'?'关闭导航菜单':'Close navigation menu'):(locale==='zh'?'打开导航菜单':'Open navigation menu')} aria-expanded={menu} aria-controls="ax-navigation" onClick={()=>setMenu(!menu)}>{menu?(locale==='zh'?'关闭':'CLOSE'):(locale==='zh'?'菜单':'MENU')}<span className={`ax-hamburger ${menu?'is-open':''}`}><i/><i/><i/></span></button></div></header>
 <AnimatePresence>{menu&&<motion.nav id="ax-navigation" className="ax-navigation" initial={reduced?false:{clipPath:'inset(0 0 100% 0)'}} animate={{clipPath:'inset(0 0 0% 0)'}} exit={{clipPath:'inset(0 0 100% 0)'}} transition={{duration:reduced?0:.65,ease:[.19,1,.22,1]}} aria-label={locale==='zh'?'主导航':'Main navigation'}><div className="ax-wrap ax-menu-layout"><div className="ax-menu-links">{copy.nav.map((item,i)=><motion.div key={i} initial={reduced?false:{y:35,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:reduced?0:.1+i*.05}}><Link onClick={()=>setMenu(false)} href={`${home}#${copy.anchors[i]}`}><small>0{i+1}</small>{item[locale]}</Link></motion.div>)}</div><aside className="ax-menu-office"><p className="ax-eyebrow">{locale==='zh'?'办公室 · 演示信息':'OFFICE HEADQUARTERS · DEMO'}</p><h3>{name}</h3><p>{locale==='zh'?'纽约列克星敦大道 750 号 24 层':'750 Lexington Avenue, 24th Floor'}<br/>New York, NY 10022</p><p>{brand.phone}<br/>{brand.email}</p><Link href={home+'#contact'} className="ax-button" onClick={()=>setMenu(false)}>{copy.book[locale]}</Link></aside></div></motion.nav>}</AnimatePresence>
 <main>{children}</main><Footer locale={locale} home={home}/>{host.marketplaceHref&&<Link className="ax-market" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}>{host.lightLogo&&<img src={host.lightLogo} alt=""/>}<span>{name}</span></Link>}</div>
}



export function Shell(props:SiteTemplatePageProps&{children:ReactNode}) { return <HeaderMotionProvider><ShellBody {...props}/></HeaderMotionProvider> }
