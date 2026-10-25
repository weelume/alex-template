'use client'
import Link from 'next/link'
import { copy, articles } from '../content/data'
import { asset } from '../config/brand'
import { SectionTitle, Reveal, Letters } from './Motion'
import type { TemplateLocale } from '../../../types'
export function Insights({locale,basePath}:{locale:TemplateLocale;basePath:string}) {return <section id="blogs" className="ax-section ax-wrap"><SectionTitle text={copy.insights[locale]} description={copy.insightText[locale]}/><div className="ax-blog-grid">{articles.map((a,i)=><Reveal key={a.slug} delay={.22+i*.1} y={40} className="ax-blog-card"><Link href={`${basePath}/insights/${a.slug}`}><div className="ax-blog-img"><img src={asset(`photo-${a.photo}.jpg`)} alt={a.title[locale]}/></div><time dateTime={a.date}>{a.date}</time><h3><Letters text={a.title[locale]} stagger={.02}/></h3><span className="ax-text-button">{locale==='zh'?'阅读全文':'Read More'}</span></Link></Reveal>)}</div></section>}
