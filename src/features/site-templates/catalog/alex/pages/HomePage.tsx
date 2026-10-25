'use client'
import { useState, useCallback } from 'react'
import { Shell } from '../components/Shell'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { Cases } from '../components/Cases'
import { Metrics } from '../components/Metrics'
import { Testimonials } from '../components/Testimonials'
import { Pricing } from '../components/Pricing'
import { Insights } from '../components/Insights'
import { Contact, LocalForm } from '../components/Contact'
import { Modal } from '../components/Modal'
import { copy, services } from '../content/data'
import { asset } from '../config/brand'
import type { SiteTemplatePageProps } from '../../../types'
export default function HomePage({locale='zh',basePath}:SiteTemplatePageProps) {
 const [modal,setModal]=useState<'book'|'story'|number|null>(null),close=useCallback(()=>setModal(null),[setModal]),book=()=>setModal('book'),service=typeof modal==='number'?services[modal]:null
 return <Shell locale={locale} basePath={basePath}><Hero locale={locale} book={book}/><About locale={locale} story={()=>setModal('story')}/><Services locale={locale} details={setModal}/><Cases locale={locale}/><Metrics locale={locale}/><Testimonials locale={locale}/><Pricing locale={locale} book={book}/><Insights locale={locale} basePath={basePath}/><Contact locale={locale}/><Modal open={modal!==null} onClose={close} closeLabel={locale==='zh'?'关闭弹窗':'Close dialog'} title={service?service.title[locale]:modal==='story'?(locale==='zh'?'我的故事':'MY STORY'):copy.book[locale]}>{modal==='book'?<LocalForm locale={locale} booking/>:service?<><p>{service.text[locale]}</p><ul className="ax-check-list">{service.bullets.map(b=><li key={b.en}>{b[locale]}</li>)}</ul><button className="ax-button" onClick={book}>{copy.book[locale]}</button></>:<><img className="ax-story-photo" src={asset('portrait.webp')} alt={locale==='zh'?'律师肖像':'Attorney portrait'}/><p>{copy.intro[locale]}</p><p>{copy.philosophyText[locale]}</p><button className="ax-button" onClick={book}>{copy.book[locale]}</button></>}</Modal></Shell>
}

