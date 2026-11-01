import { useEffect, useRef, useState } from 'react'
import './LatestCollection.css'

const collections = [
  { id: 'new-heritage', number: '01', src: '/images/collection-01.png', alt: 'Vivienne Westwood collection look in pearl ivory', title: ['NEW', 'HERITAGE'], description: ['Historic corsetry, draping', 'and British references are reworked', 'through a contemporary seasonal perspective.'] },
  { id: 'dressed-in-rebellion', number: '02', src: '/images/collection-02.png', alt: 'Vivienne Westwood collection look in tartan and leather', title: ['DRESSED IN', 'REBELLION'], description: ['Punk references, distressed textures', 'and sharp construction bring', 'a rebellious edge to the season.'] },
  { id: 'house-in-motion', number: '03', src: '/images/collection-03.png', alt: 'Vivienne Westwood runway look in a black tailored outfit', title: ['THE HOUSE IN', 'MOTION'], description: ['British tailoring, sculptural silhouettes', 'and rebellious craftsmanship', 'shaped through movement.'] },
]

function getSlot(index, activeIndex) {
  return (index - activeIndex + collections.length) % collections.length
}

export default function LatestCollection() {
  const sectionRef = useRef(null)
  const frameRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    let animationFrame
    const updateCollection = () => {
      const section = sectionRef.current
      const frame = frameRef.current
      if (!section || !frame) return
      const sectionBounds = section.getBoundingClientRect()
      const frameBounds = frame.getBoundingClientRect()
      const distance = Math.max(sectionBounds.height - frameBounds.height, 1)
      const progress = Math.min(1, Math.max(0, -sectionBounds.top / distance))
      const nextIndex = Math.min(collections.length - 1, Math.floor(progress * collections.length))
      setActiveIndex((currentIndex) => (currentIndex === nextIndex ? currentIndex : nextIndex))
      setHasEntered((entered) => entered || sectionBounds.top < window.innerHeight * 0.82)
    }
    const onScrollOrResize = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(updateCollection)
    }
    updateCollection()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [])

  return (
    <section className="latest-collection" aria-labelledby="latest-collection-title" data-entered={hasEntered} ref={sectionRef}>
      <div className="latest-collection__sticky" ref={frameRef}>
        <div className="latest-collection__image-stack" aria-hidden="true">
          {collections.map((collection, index) => (
            <div className="latest-collection__image-frame" data-slot={getSlot(index, activeIndex)} key={collection.id}>
              <img className="latest-collection__image" src={collection.src} alt="" />
            </div>
          ))}
        </div>
        <ol className="latest-collection__states" aria-label="Collection progress">
          {collections.map((collection, index) => (
            <li className={`latest-collection__state${index === activeIndex ? ' latest-collection__state--active' : ''}`} key={collection.id} aria-current={index === activeIndex ? 'step' : undefined}>
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
