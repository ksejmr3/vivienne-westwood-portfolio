import { useCallback, useEffect, useRef, useState } from 'react'
import './HouseObjects.css'

const SPEED = 100
const MANUAL_DURATION = 550
const DESKTOP_QUERY = '(min-width: 901px)'
const REDUCED_QUERY = '(prefers-reduced-motion: reduce)'

const products = [
  { name: 'Mini Bas Relief Necklace', image: '/images/necklace-01.png' },
  { name: 'Rigomerta Drop Pearl Necklace', image: '/images/necklace-02.png' },
  { name: 'Victorine Necklace', image: '/images/necklace-03.png' },
  { name: 'Baya Drop Necklace', image: '/images/necklace-04.png' },
  { name: 'Chaos Pearl Necklace', image: '/images/necklace-05.png' },
  { name: 'Lucrece Necklace', image: '/images/necklace-06.png' },
]

function ProductCard({ name, image, isClone, position }) {
  return (
    <article
      className={`house-objects__card${isClone ? ' house-objects__card--clone' : ''}`}
      aria-hidden={isClone ? 'true' : undefined}
      aria-label={isClone ? undefined : `${position} of ${products.length}: ${name}`}
    >
      <div className="house-objects__image-frame">
        <img className="house-objects__image" src={image} alt={isClone ? '' : name} />
      </div>
      <p className="house-objects__product-name">{name}</p>
    </article>
  )
}

function normalize(offset, width) {
  if (!width) return offset
  let value = offset
  while (value >= width * 2) value -= width
  while (value < width) value += width
  return value
}

const ease = (value) => (
  value < 0.5 ? 4 * value ** 3 : 1 - ((-2 * value + 2) ** 3) / 2
)

export default function HouseObjects() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const autoFrameRef = useRef(null)
  const manualFrameRef = useRef(null)
  const lastTimeRef = useRef(null)
  const offsetRef = useRef(0)
  const stepRef = useRef(440)
  const setWidthRef = useRef(2640)
  const pointerControlRef = useRef(false)
  const [desktop, setDesktop] = useState(() => window.matchMedia(DESKTOP_QUERY).matches)
  const [reduced, setReduced] = useState(() => window.matchMedia(REDUCED_QUERY).matches)
  const [visible, setVisible] = useState(false)
  const [pageVisible, setPageVisible] = useState(!document.hidden)
  const [focusWithin, setFocusWithin] = useState(false)
  const [manualMoving, setManualMoving] = useState(false)
  const [announcement, setAnnouncement] = useState('')

  const renderOffset = useCallback((offset) => {
    offsetRef.current = offset
    const track = trackRef.current
    if (!track) return
    track.style.transform = `translate3d(${-offset}px, 0, 0)`
    const cycle = ((offset - setWidthRef.current) % setWidthRef.current + setWidthRef.current) % setWidthRef.current
    track.dataset.activeIndex = String(Math.floor(cycle / stepRef.current) % products.length)
  }, [])

  const stopAuto = useCallback(() => {
    if (autoFrameRef.current !== null) cancelAnimationFrame(autoFrameRef.current)
    autoFrameRef.current = null
    lastTimeRef.current = null
  }, [])

  const stopManual = useCallback(() => {
    if (manualFrameRef.current !== null) cancelAnimationFrame(manualFrameRef.current)
    manualFrameRef.current = null
  }, [])

  useEffect(() => {
    const desktopMedia = matchMedia(DESKTOP_QUERY)
    const reducedMedia = matchMedia(REDUCED_QUERY)
    const onDesktop = (event) => {
      setDesktop(event.matches)
      if (!event.matches) {
        stopManual()
        setManualMoving(false)
      }
    }
    const onReduced = (event) => setReduced(event.matches)
    desktopMedia.addEventListener('change', onDesktop)
    reducedMedia.addEventListener('change', onReduced)
    return () => {
      desktopMedia.removeEventListener('change', onDesktop)
      reducedMedia.removeEventListener('change', onReduced)
    }
  }, [stopManual])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting && entry.intersectionRatio >= 0.1),
      { threshold: [0, 0.1] },
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onVisibility = () => setPageVisible(!document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    const measure = () => {
      const card = track.querySelector('.house-objects__card')
      const oldWidth = setWidthRef.current
      const oldCycle = oldWidth ? ((offsetRef.current - oldWidth) % oldWidth + oldWidth) % oldWidth : 0
      const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
      const step = card.offsetWidth + gap
      const width = step * products.length
      stepRef.current = step
      setWidthRef.current = width
      renderOffset(width + (oldWidth ? oldCycle / oldWidth : 0) * width)
    }
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    measure()
    return () => observer.disconnect()
  }, [renderOffset])

  useEffect(() => {
    const canMove = desktop && !reduced && visible && pageVisible && !focusWithin && !manualMoving
    stopAuto()
    if (!canMove) return undefined
    const tick = (time) => {
      if (lastTimeRef.current === null) lastTimeRef.current = time
      const delta = Math.min(time - lastTimeRef.current, 50)
      lastTimeRef.current = time
      renderOffset(normalize(offsetRef.current + SPEED * delta / 1000, setWidthRef.current))
      autoFrameRef.current = requestAnimationFrame(tick)
    }
    autoFrameRef.current = requestAnimationFrame(tick)
    return stopAuto
  }, [desktop, focusWithin, manualMoving, pageVisible, reduced, renderOffset, stopAuto, visible])

  useEffect(() => {
    if (desktop) renderOffset(normalize(offsetRef.current || setWidthRef.current, setWidthRef.current))
    else {
      stopAuto()
      stopManual()
      trackRef.current.style.transform = ''
    }
  }, [desktop, renderOffset, stopAuto, stopManual])

  useEffect(() => () => {
    stopAuto()
    stopManual()
  }, [stopAuto, stopManual])

  const moveOne = (direction, event) => {
    if (!desktop || manualFrameRef.current !== null) return
    if (pointerControlRef.current) {
      event.currentTarget.blur()
      pointerControlRef.current = false
    }
    stopAuto()
    setManualMoving(true)
    const start = offsetRef.current
    const target = start + direction * stepRef.current
    const startedAt = event.timeStamp
    const finish = () => {
      manualFrameRef.current = null
      renderOffset(normalize(target, setWidthRef.current))
      setManualMoving(false)
    }
    if (reduced) finish()
    else {
      const tick = (time) => {
        const progress = Math.min((time - startedAt) / MANUAL_DURATION, 1)
        renderOffset(start + (target - start) * ease(progress))
        if (progress < 1) manualFrameRef.current = requestAnimationFrame(tick)
        else finish()
      }
      manualFrameRef.current = requestAnimationFrame(tick)
    }
    const normalized = normalize(target, setWidthRef.current) - setWidthRef.current
    const index = ((Math.round(normalized / stepRef.current) % products.length) + products.length) % products.length
    setAnnouncement(`${products[index].name}, ${index + 1} of ${products.length}`)
  }

  const cards = [...products, ...products, ...products]
  const autoplay = desktop && !reduced && visible && pageVisible && !focusWithin && !manualMoving

  return (
    <section
      className="house-objects"
      aria-labelledby="house-objects-title"
      ref={sectionRef}
      onFocusCapture={() => setFocusWithin(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocusWithin(false)
      }}
    >
      <h2 className="house-objects__title" id="house-objects-title">HOUSE OBJECTS</h2>
      <div className="house-objects__arrows">
        {[-1, 1].map((direction) => (
          <button
            className={`house-objects__arrow house-objects__arrow--${direction < 0 ? 'previous' : 'next'}`}
            type="button"
            aria-label={direction < 0 ? 'Previous necklace' : 'Next necklace'}
            aria-controls="house-objects-carousel"
            key={direction}
            onPointerDown={() => { pointerControlRef.current = true }}
            onClick={(event) => moveOne(direction, event)}
          >
            <img src="/icons/carousel-arrow.svg" alt="" />
          </button>
        ))}
      </div>
      <div className="house-objects__carousel" id="house-objects-carousel" aria-label="House objects" aria-roledescription="carousel">
        <div className="house-objects__track" ref={trackRef} data-active-index="0" data-autoplay={autoplay ? 'active' : 'paused'}>
          {cards.map((product, index) => (
            <ProductCard
              key={`${product.name}-${index}`}
              {...product}
              isClone={Math.floor(index / products.length) !== 1}
              position={(index % products.length) + 1}
            />
          ))}
        </div>
      </div>
      <p className="house-objects__announcement" aria-live="polite" aria-atomic="true">{announcement}</p>
    </section>
  )
}
