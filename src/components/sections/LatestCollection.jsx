import { useEffect, useRef, useState } from 'react'
import './LatestCollection.css'

const collections = [
  { id: 'new-heritage', number: '01', src: '/images/collection-01.png', alt: 'Vivienne Westwood collection look in pearl ivory', title: ['NEW', 'HERITAGE'], description: ['Historic corsetry, draping', 'and British references are reworked', 'through a contemporary seasonal perspective.'] },
  { id: 'dressed-in-rebellion', number: '02', src: '/images/collection-02.png', alt: 'Vivienne Westwood collection look in tartan and leather', title: ['DRESSED IN', 'REBELLION'], description: ['Punk references, distressed textures', 'and sharp construction bring', 'a rebellious edge to the season.'] },
  { id: 'house-in-motion', number: '03', src: '/images/collection-03.png', alt: 'Vivienne Westwood runway look in a black tailored outfit', title: ['THE HOUSE IN', 'MOTION'], description: ['British tailoring, sculptural silhouettes', 'and rebellious craftsmanship', 'shaped through movement.'] },
]

const CARD_TIMELINES = [
  [
    [0, { x: 210, y: 140 }],
    [1, { x: 210, y: 140 }],
  ],
  [
    [0, { x: 234, y: 1200 }],
    [0.16, { x: 234, y: 1200 }],
    [0.37, { x: 234, y: 165 }],
    [1, { x: 234, y: 165 }],
  ],
  [
    [0, { x: 258, y: 1200 }],
    [0.48, { x: 258, y: 1200 }],
    [0.72, { x: 258, y: 190 }],
    [1, { x: 258, y: 190 }],
  ],
]

function getResponsiveTimelines(width, height) {
  const cardRatio = width >= 768 ? .48 : width <= 360 ? .54 : .62
  const cardWidth = Math.min(width >= 768 ? 440 : 520, width * cardRatio)
  const baseX = (width - cardWidth) / 2
  const restingY = Math.max(64, Math.min(120, height * .1))
  const incomingY = height + 80

  return [
    [[0, { x: baseX - 12, y: restingY }], [1, { x: baseX - 12, y: restingY }]],
    [[0, { x: baseX, y: incomingY }], [.16, { x: baseX, y: incomingY }], [.37, { x: baseX, y: restingY + 14 }], [1, { x: baseX, y: restingY + 14 }]],
    [[0, { x: baseX + 12, y: incomingY }], [.48, { x: baseX + 12, y: incomingY }], [.72, { x: baseX + 12, y: restingY + 28 }], [1, { x: baseX + 12, y: restingY + 28 }]],
  ]
}

function interpolateCard(timeline, progress) {
  const finalStop = timeline[timeline.length - 1]
  if (progress >= finalStop[0]) return finalStop[1]

  for (let index = 1; index < timeline.length; index += 1) {
    const [end, endPoint] = timeline[index]
    if (progress <= end) {
      const [start, startPoint] = timeline[index - 1]
      const amount = (progress - start) / (end - start)
      const eased = amount * amount * (3 - (2 * amount))
      return {
        x: startPoint.x + ((endPoint.x - startPoint.x) * eased),
        y: startPoint.y + ((endPoint.y - startPoint.y) * eased),
      }
    }
  }

  return finalStop[1]
}

export default function LatestCollection() {
  const sectionRef = useRef(null)
  const frameRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [viewport, setViewport] = useState(() => ({ width: window.innerWidth, height: window.innerHeight }))

  useEffect(() => {
    let animationFrame
    const updateCollection = () => {
      const section = sectionRef.current
      const frame = frameRef.current
      if (!section || !frame) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setProgress(0)
        setActiveIndex(0)
        return
      }
      const sectionBounds = section.getBoundingClientRect()
      const frameBounds = frame.getBoundingClientRect()
      const distance = Math.max(sectionBounds.height - frameBounds.height, 1)
      const nextProgress = Math.min(1, Math.max(0, -sectionBounds.top / distance))
      const nextIndex = nextProgress < 0.3 ? 0 : nextProgress < 0.64 ? 1 : 2
      setProgress((currentProgress) => (Math.abs(currentProgress - nextProgress) < 0.001 ? currentProgress : nextProgress))
      setActiveIndex((currentIndex) => (currentIndex === nextIndex ? currentIndex : nextIndex))
    }
    const onScroll = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(updateCollection)
    }
    const onResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight })
      onScroll()
    }
    updateCollection()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const timelines = viewport.width <= 900
    ? getResponsiveTimelines(viewport.width, Math.max(496, viewport.height - 72))
    : CARD_TIMELINES

  return (
    <section className="latest-collection" id="collection" aria-labelledby="latest-collection-title" ref={sectionRef}>
      <div className="latest-collection__sticky" ref={frameRef}>
        <div className="latest-collection__image-stack" aria-hidden="true">
          {collections.map((collection, index) => {
            const position = interpolateCard(timelines[index], progress)
            return (
            <div
              className="latest-collection__image-frame"
              data-card={index}
              key={collection.id}
              style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
            >
              <img className="latest-collection__image" src={collection.src} alt="" />
            </div>
            )
          })}
        </div>
        <ol className="latest-collection__states" aria-label="Collection progress">
          {collections.map((collection, index) => (
            <li className={`latest-collection__state${index === activeIndex ? ' latest-collection__state--active' : ''}`} key={collection.id} aria-current={index === activeIndex ? 'step' : undefined}>
              <span className="latest-collection__state-number" aria-hidden="true">{collection.number}</span>
              <span className="visually-hidden">{collection.number} {collection.title.join(' ')}</span>
            </li>
          ))}
        </ol>
        <div className="latest-collection__copy" aria-live="polite">
          <p className="latest-collection__eyebrow">LATEST COLLECTION</p>
          {collections.map((collection, index) => (
            <div className="latest-collection__copy-panel" data-active={index === activeIndex} key={collection.id} aria-hidden={index !== activeIndex}>
              <h2 className="latest-collection__title" id={index === activeIndex ? 'latest-collection-title' : undefined}>{collection.title.map((line) => <span key={line}>{line}</span>)}</h2>
              <p className="latest-collection__description">{collection.description.map((line) => <span key={line}>{line}</span>)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
