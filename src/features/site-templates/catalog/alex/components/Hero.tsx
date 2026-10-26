'use client'
import Link from 'next/link'
import { motion, useTransform, useReducedMotion, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'
import { copy } from '../content/data'
import { useAlexHost } from '../host'
import { asset } from '../config/brand'
import { Letters, Reveal, ease } from './Motion'
import { useHeaderMotion } from './HeaderMotion'
import { heroGeometry } from './HeroMotion'
import type { TemplateLocale } from '../../../types'

export function Hero({ locale, book }: { locale: TemplateLocale; book: () => void }) {
  const host = useAlexHost(), reduced = Boolean(useReducedMotion()), dragMoved = useRef(false)
  const { scroll, width, height, hidden, scrolled } = useHeaderMotion()
  const geometry = heroGeometry(width, height), desktop = width >= 1024
  const progress = useTransform(scroll, [0, geometry.scrollDistance], [0, 1])
  const top = useTransform(progress, [0, 1], [geometry.expandedTop, geometry.collapsedTop])
  const signatureHeight = useTransform(progress, [0, 1], [geometry.expandedHeight, geometry.collapsedHeight])
  const signatureWidth = useTransform(progress, [0, 1], [geometry.expandedWidth, geometry.collapsedWidth])
  const signatureFont = useTransform(signatureHeight, value => Math.max(18, .78 * value))
  const copyOpacity = useTransform(scroll, [0, 350], [1, 0])
  const copyY = useTransform(scroll, [0, 400], [0, -80])
  const [phase, setPhase] = useState({ badgeOut: false, ctaOut: false, compact: false })
  useMotionValueEvent(scroll, 'change', value => {
    const next = { badgeOut: value > 260, ctaOut: desktop ? value / geometry.scrollDistance > .12 : value > 180, compact: value / geometry.scrollDistance > .8 }
    setPhase(current => Object.keys(next).every(key => next[key as keyof typeof next] === current[key as keyof typeof current]) ? current : next)
  })
  const ctaOut = !reduced && phase.ctaOut
  const button = <motion.button className="ax-tilted ax-button" disabled={ctaOut}
    data-drag-enabled={desktop && !reduced && !ctaOut}
    drag={desktop && !reduced && !ctaOut} dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }} dragSnapToOrigin
    onPointerDown={() => { dragMoved.current = false }} onDragStart={() => { dragMoved.current = true }}
    onDragEnd={() => console.debug('[alex:hero] drag released', { snapToOrigin: true })}
    onClick={() => { if (!dragMoved.current && !ctaOut) book() }}
    initial={reduced ? false : { opacity: 0, y: desktop ? -160 : -140, rotate: desktop ? -20 : -18, scale: .9 }}
    animate={{ opacity: ctaOut ? 0 : 1, y: ctaOut ? desktop ? -160 : -140 : 0, rotate: desktop ? -20 : -18, scale: ctaOut ? .9 : 1 }}
    transition={{ duration: reduced ? 0 : 1, delay: ctaOut || reduced ? 0 : .3, ease }}
    whileHover={reduced || ctaOut ? undefined : { rotate: desktop ? -15 : -12, scale: 1.05 }} whileTap={reduced ? undefined : { scale: .95 }}>
    {copy.book[locale]}
  </motion.button>
  return <><section id="home" className="ax-hero">
    <img className="ax-hero-bg" src={asset('hero.webp')} alt={locale === 'zh' ? '律师与正义女神像' : 'Alex Carter – Senior Business Lawyer'} />
    <div className="ax-hero-shade" />
    <motion.div className="ax-wrap ax-hero-content" style={reduced ? undefined : { opacity: copyOpacity, y: copyY }}>
      <Reveal x={-30} y={0} delay={.2}><h1><Letters text={copy.hero[locale]} /></h1><p className="ax-purpose"><span aria-hidden="true">▥</span>{copy.purpose[locale]}</p></Reveal>
      <motion.div className="ax-badge" initial={reduced ? false : { opacity: 0, x: 140 }} animate={{ opacity: !reduced && phase.badgeOut ? 0 : 1, x: !reduced && phase.badgeOut ? 140 : 0 }} transition={{ duration: reduced ? 0 : 1, delay: phase.badgeOut || reduced ? 0 : .25, ease }}>
        <span className="ax-scales" aria-hidden="true">⚖</span><small>{locale === 'zh' ? '专业 · 责任 · 信任' : 'MEMBER OF THE'}</small><strong>{copy.badge[locale]}</strong><ul>{copy.promises.map(item => <li key={item.en}>{item[locale]}</li>)}</ul>
      </motion.div>
    </motion.div>
    {desktop ? <motion.div className="ax-signature" style={{ position: reduced ? 'absolute' : 'fixed', top: reduced ? geometry.expandedTop : top, height: reduced ? geometry.expandedHeight : signatureHeight }} animate={{ opacity: hidden && scrolled ? 0 : 1, y: hidden && scrolled ? -140 : 0 }} transition={{ duration: reduced ? 0 : .3, ease }}>
      <motion.div className="ax-signature-brand" style={{ width: reduced ? geometry.expandedWidth : signatureWidth, height: reduced ? geometry.expandedHeight : signatureHeight }}>
        <Link href="#home" tabIndex={phase.compact ? 0 : -1} aria-label={locale === 'zh' ? '返回页面顶部' : 'Back to top'} style={{ pointerEvents: phase.compact ? 'auto' : 'none' }}>
          {host.logo ? <motion.span style={{ fontSize: reduced ? .78 * geometry.expandedHeight : signatureFont }}>{host.brandName[locale]}</motion.span> : <img src={asset('name.svg')} alt="ALEX CARTER" />}
        </Link>
      </motion.div>{button}
    </motion.div> : <div className="ax-hero-name ax-wrap"><div className="ax-name-word">{host.logo ? host.brandName[locale] : 'ALEX-CARTER'}</div>{button}</div>}
  </section>
  <section className="ax-intro"><div className="ax-logos" tabIndex={0} aria-label={locale === 'zh' ? '合作品牌循环展示' : 'Partner brands marquee'}><div>{Array.from({ length: 4 }, (_, index) => <span className="ax-logo-set" key={index}>{['45 Degrees°', 'Acme Corp', 'Codecraft_', 'Convergence', 'Lightspeed', 'Luminary'].map((name, i) => <span key={name}><b aria-hidden="true">{['◒', '✳', '▦', '◈', '▤', '✹'][i]}</b>{name}</span>)}</span>)}</div></div>
    <div className="ax-wrap ax-intro-copy"><Reveal><h2>{copy.trusted[locale]}</h2></Reveal><Reveal delay={.2}><p className="ax-muted">{copy.intro[locale]}</p></Reveal></div><Link className="ax-skip" href="#aboutme">{locale === 'zh' ? '继续了解' : 'Explore the practice'}</Link>
  </section></>
}
