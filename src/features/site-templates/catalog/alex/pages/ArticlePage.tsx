'use client'
import Link from 'next/link'
import { Shell } from '../components/Shell'
import { Letters, Reveal } from '../components/Motion'
import { articles, copy } from '../content/data'
import { asset } from '../config/brand'
import type { SiteTemplatePageProps } from '../../../types'
export function Article({locale='zh',basePath,index}:SiteTemplatePageProps&{index:number}) {const a=articles[index];return <Shell locale={locale} basePath={basePath}><article className="ax-article ax-wrap"><Link href={`${basePath||'/'}#blogs`}>{locale==='zh'?'返回法律洞察':'Back to insights'}</Link><time dateTime={a.date}>{a.date}</time><h1><Letters text={a.title[locale]}/></h1><Reveal><img src={asset(`photo-${a.photo}.jpg`)} alt={a.title[locale]}/></Reveal>{a.paragraphs.map(p=><p key={p.en}>{p[locale]}</p>)}<aside>{copy.disclaimer[locale]}</aside><Link className="ax-button" href={`${basePath||'/'}#contact`}>{copy.book[locale]}</Link></article></Shell>}
