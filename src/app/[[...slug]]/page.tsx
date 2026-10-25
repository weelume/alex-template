import { notFound } from 'next/navigation'
import { alexTemplate } from '../../features/site-templates/catalog/alex/meta'
export function generateStaticParams(){return alexTemplate.surfaces[0].pages.flatMap(p=>[{slug:p.slug?p.slug.split('/'):[]},{slug:['en',...(p.slug?p.slug.split('/'):[])]}])}
export default async function Page({params}:{params:Promise<{slug?:string[]}>}){const{slug=[]}=await params,locale=slug[0]==='en'?'en':'zh',path=(locale==='en'?slug.slice(1):slug).join('/'),page=alexTemplate.surfaces[0].pages.find(p=>p.slug===path);if(!page)notFound();const{default:Component}=await page.load();return <Component locale={locale} basePath={locale==='en'?'/en':''}/>}
export async function generateMetadata({params}:{params:Promise<{slug?:string[]}>}){const{slug=[]}=await params;return{title:`${slug[0]==='en'?'Legal Counsel':'专业法律顾问'} · Alex`}}
