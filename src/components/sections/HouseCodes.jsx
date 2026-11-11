import { useLayoutEffect, useRef } from 'react'
import './HouseCodes.css'

const PIXELS_PER_SECOND = 70
const COPY_COUNT = 4

const rows = [
  { id: 'symbols', direction: 'left', items: [
    { id: 'orb', word: 'ORB', caption: 'House Symbol', hoverColor: '#9584d3' },
    { id: 'corset', word: 'CORSET', caption: 'Body Architecture', hoverColor: '#c1121f' },
    { id: 'tartan', word: 'TARTAN', caption: 'British Heritage', hoverColor: '#8d1f2d' },
  ] },
  { id: 'origins', direction: 'right', items: [
    { id: 'punk', word: 'PUNK', caption: 'Anti-Establishment', hoverColor: '#e8587a' },
    { id: 'pearls', word: 'PEARLS', caption: 'Iconic Jewelry', hoverColor: '#9584d3' },
    { id: 'london', word: 'LONDON', caption: 'Since 1971', hoverColor: '#61a96d' },
  ] },
  { id: 'legacy', direction: 'left', items: [
    { id: 'activism', word: 'ACTIVISM', caption: 'Climate Action', hoverColor: '#61a96d' },
    { id: 'heritage', word: 'HERITAGE', caption: 'Brand Legacy', hoverColor: '#9584d3' },
    { id: 'chain', word: 'CHAIN', caption: 'Creative Disorder', hoverColor: '#e8587a' },
  ] },
  { id: 'forms', direction: 'right', items: [
    { id: 'archive', word: 'ARCHIVE', caption: 'Past Collections', hoverColor: '#c1121f' },
    { id: 'platform', word: 'PLATFORM', caption: 'Elevated Soles', hoverColor: '#61a96d' },
    { id: 'draping', word: 'DRAPING', caption: 'Fluid Forms', hoverColor: '#9584d3' },
  ] },
  { id: 'details', direction: 'left', items: [
    { id: 'red-label', word: 'RED LABEL', caption: 'Youth Culture', hoverColor: '#e8587a' },
    { id: 'safety-pin', word: 'SAFETY PIN', caption: 'Subversive Detail', hoverColor: '#9584d3' },
    { id: 'tailoring', word: 'TAILORING', caption: 'Precision Cutting', hoverColor: '#61a96d' },
  ] },
]

function MarqueeSet({ row, copyIndex }) {
  return (
    <div className="house-codes__set" data-marquee-set={copyIndex} aria-hidden="true">
      {row.items.map((item) => (
        <span className="house-codes__item" key={`${copyIndex}-${item.id}`}>
          <span className="house-codes__caption">{item.caption}</span>
          <span className="house-codes__word" style={{ '--hover-color': item.hoverColor }}>
            {item.word}
          </span>
        </span>
      ))}
    </div>
  )
}

function MarqueeRow({ row }) {
  const rowRef = useRef(null)

  useLayoutEffect(() => {
    const rowElement = rowRef.current
    const primarySet = rowElement?.querySelector('[data-marquee-set="0"]')
    if (!rowElement || !primarySet) return undefined

    let disposed = false
    const measure = () => {
      if (disposed) return
      const distance = primarySet.getBoundingClientRect().width
      if (!Number.isFinite(distance) || distance <= 0) return

      rowElement.style.setProperty('--marquee-distance', `${distance}px`)
      rowElement.style.setProperty('--marquee-duration', `${distance / PIXELS_PER_SECOND}s`)
      rowElement.dataset.marqueeReady = 'true'
    }

    const observer = new ResizeObserver(measure)
    observer.observe(primarySet)
    measure()
    document.fonts?.ready.then(measure)

    return () => {
      disposed = true
      observer.disconnect()
    }
  }, [])

  return (
    <div
      className={`house-codes__row house-codes__row--${row.direction}`}
      ref={rowRef}
      role="group"
      aria-label={row.items.map((item) => item.word).join(', ')}
    >
      <div className="house-codes__track">
        {Array.from({ length: COPY_COUNT }, (_, copyIndex) => (
          <MarqueeSet row={row} copyIndex={copyIndex} key={`${row.id}-${copyIndex}`} />
        ))}
      </div>
    </div>
  )
}

export default function HouseCodes() {
  return (
    <section className="house-codes" id="house-codes" aria-label="House Codes">
      {rows.map((row) => <MarqueeRow row={row} key={row.id} />)}
    </section>
  )
}
