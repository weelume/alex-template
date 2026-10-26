'use client'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useState, useRef, useEffect, useSyncExternalStore } from 'react'
import { testimonials } from '../content/data'
import { asset } from '../config/brand'
import { SectionTitle } from './Motion'
import { cardMotion, isPlaybackPaused, relativeOffset } from './CarouselMotion'
import type { TemplateLocale } from '../../../types'

const subscribeWidth = (listener: () => void) => {
  window.addEventListener('resize', listener)
  return () => window.removeEventListener('resize', listener)
}
const getWidth = () => window.innerWidth
const serverWidth = () => 1280
const subscribeVisibility = (listener: () => void) => {
  document.addEventListener('visibilitychange', listener)
  return () => document.removeEventListener('visibilitychange', listener)
}
const getDocumentHidden = () => document.hidden
const serverHidden = () => false

export function Testimonials({ locale }: { locale: TemplateLocale }) {
  const [slide, setSlide] = useState({ current: 0, previous: 0 })
  const [manualPaused, setManualPaused] = useState(false)
  const [resumeOverride, setResumeOverride] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const visible = useInView(ref, { amount: .2 })
  const reduced = Boolean(useReducedMotion())
  const width = useSyncExternalStore(subscribeWidth, getWidth, serverWidth)
  const documentHidden = useSyncExternalStore(subscribeVisibility, getDocumentHidden, serverHidden)
  const count = testimonials.length
  const paused = isPlaybackPaused({ manualPaused, resumeOverride, hovered, focused, visible, documentHidden, reduced })

  useEffect(() => {
    if (paused || count < 2) return
    const timer = setInterval(() => setSlide(state => ({ previous: state.current, current: (state.current + 1) % count })), 5200)
    return () => clearInterval(timer)
  }, [paused, count])

  const select = (target: number, trigger: string) => {
    if (count < 2) return
    const next = ((target % count) + count) % count
    setSlide(state => state.current === next ? state : { previous: state.current, current: next })
    console.debug('[alex:testimonials] select', { to: next, trigger, count })
  }
  const togglePlayback = () => {
    const nextPaused = !manualPaused
    setManualPaused(nextPaused)
    // 用户明确继续播放时覆盖当前悬停/焦点暂停，离开交互区后恢复自动暂停规则。
    setResumeOverride(!nextPaused)
    console.debug('[alex:testimonials] playback', { manualPaused: nextPaused })
  }

  return <section ref={ref} id="testimonials" className="ax-section ax-testimonials"
    data-carousel-state={paused ? 'paused' : 'playing'} data-carousel-current={slide.current}
    data-manual-paused={manualPaused} data-hovered={hovered} data-focused={focused}
    onPointerEnter={event => { if (event.pointerType !== 'touch') setHovered(true) }}
    onPointerLeave={() => { setHovered(false); if (!focused) setResumeOverride(false) }}
    onFocusCapture={() => setFocused(true)}
    onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) { setFocused(false); if (!hovered) setResumeOverride(false) } }}>
    <div className="ax-wrap"><SectionTitle label={locale === 'zh' ? '客户的故事' : 'CLIENT STORIES'} text={locale === 'zh' ? '真实客户 切实成果' : 'REAL CLIENTS. REAL RESULTS.'} /></div>
    <div className="ax-testimonial-stage" aria-live={paused ? 'polite' : 'off'}>
      {testimonials.map((item, index) => {
        const offset = relativeOffset(index, slide.current, count), center = offset === 0
        const plan = cardMotion(index, slide.current, slide.previous, count, width, reduced)
        return <motion.div key={item.name} className={`ax-testimonial ${center ? 'is-center' : ''}`}
          data-card-index={index} data-card-offset={offset}
          initial={false} animate={plan.animate} transition={plan.transition}
          style={{ pointerEvents: plan.layout.visible ? 'auto' : 'none' }}
          role={center ? 'group' : 'button'} tabIndex={!center && plan.layout.visible ? 0 : -1}
          aria-hidden={!plan.layout.visible}
          aria-label={center ? item.title[locale] : locale === 'zh' ? `查看 ${item.name} 的评价` : `View ${item.name}'s testimonial`}
          onClick={() => { if (!center) select(index, 'side-card') }}
          onKeyDown={event => { if (!center && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); select(index, 'side-card-keyboard') } }}>
          {center ? <motion.div key={`content-${index}`} className="ax-testimonial-content"
            initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: reduced ? 0 : .35, delay: reduced ? 0 : .38 }}>
            <div className="ax-testimonial-copy">
              <span className="ax-rating">{item.rating} <span aria-label={locale === 'zh' ? '五星' : '5 stars'}>★★★★★</span></span>
              <h3>{item.title[locale]}</h3><p>“{item.quote[locale]}”</p>
              <div className="ax-testimonial-author"><div><strong>{item.name}</strong><small>{item.role[locale]}</small></div><img src={asset(`avatar-${item.photo}.png`)} alt="" /></div>
            </div>
            <div className="ax-testimonial-portrait"><img src={asset(`avatar-${item.photo}.png`)} alt={item.name} /></div>
          </motion.div> : <img className="ax-testimonial-avatar" src={asset(`avatar-${item.photo}.png`)} alt="" />}
        </motion.div>
      })}
      {count === 0 && <p className="ax-muted">{locale === 'zh' ? '暂无客户故事' : 'No client stories yet'}</p>}
    </div>
    <div className="ax-carousel-controls">
      <button disabled={count < 2} onClick={() => select(slide.current - 1, 'previous')} aria-label={locale === 'zh' ? '上一条评价' : 'Previous testimonial'}>‹</button>
      <div>{testimonials.map((item, index) => <button key={item.name} className={index === slide.current ? 'is-active' : ''}
        onClick={() => select(index, 'pagination')} aria-label={locale === 'zh' ? `查看第 ${index + 1} 条评价` : `Go to slide ${index + 1}`} aria-current={index === slide.current ? 'true' : undefined} />)}</div>
      <button disabled={count < 2} onClick={() => select(slide.current + 1, 'next')} aria-label={locale === 'zh' ? '下一条评价' : 'Next testimonial'}>›</button>
      <button disabled={count < 2 || reduced} className="ax-pause" onClick={togglePlayback} aria-pressed={manualPaused}
        aria-label={manualPaused ? locale === 'zh' ? '继续自动播放评价' : 'Resume testimonial autoplay' : locale === 'zh' ? '暂停自动播放评价' : 'Pause testimonial autoplay'}>
        {manualPaused ? locale === 'zh' ? '播放' : 'Play' : locale === 'zh' ? '暂停' : 'Pause'}
      </button>
    </div>
    <p className="ax-demo-label">{locale === 'zh' ? '客户故事仅用于模板演示' : 'Client stories are template demonstrations'}</p>
  </section>
}
