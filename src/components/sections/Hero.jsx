import { useEffect, useRef, useState } from 'react'
import './Hero.css'

function ColorCard({ variant, label }) {
  return (
    <div className={`hero__card hero__card--${variant}`} aria-hidden="true">
      <div className="hero__card-face" data-label={label} />
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const [hasEntered, setHasEntered] = useState(() => window.innerWidth <= 900)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [viewport, setViewport] = useState(() => ({ width: window.innerWidth, height: window.innerHeight }))

  useEffect(() => {
    let frame
    const enterTimer = window.setTimeout(() => {
      frame = window.requestAnimationFrame(() => setHasEntered(true))
    }, 120)
    const updateProgress = () => {
      const section = sectionRef.current
      if (!section) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setScrollProgress(0)
        return
      }
      const sectionBounds = section.getBoundingClientRect()
      const distance = Math.max(sectionBounds.height - window.innerHeight, 1)
      const nextProgress = Math.min(1, Math.max(0, -sectionBounds.top / distance))
      setScrollProgress((current) => (Math.abs(current - nextProgress) < 0.001 ? current : nextProgress))
    }
    const onScroll = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(updateProgress)
    }
    const onResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight })
      onScroll()
    }
    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.clearTimeout(enterTimer)
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const expansionProgress = Math.min(1, Math.max(0, (scrollProgress - .18) / .72))
  const easedExpansion = expansionProgress * expansionProgress * (3 - (2 * expansionProgress))
  const textProgress = Math.min(1, scrollProgress / .52)
  const isResponsiveHero = viewport.width <= 900
  const isTabletHero = viewport.width >= 768 && isResponsiveHero
  const mobileHeaderHeight = 72
  const mobileStartWidth = isTabletHero
    ? Math.min(420, viewport.width * .52)
    : Math.min(290, Math.max(190, viewport.width * .62))
  const mobileStartHeight = mobileStartWidth * (644 / 450)
  const mobileEndHeight = Math.max(496, viewport.height - mobileHeaderHeight)
  const videoStartWidth = isResponsiveHero ? mobileStartWidth : 450
  const videoStartHeight = isResponsiveHero ? mobileStartHeight : 644
  const videoEndWidth = isResponsiveHero ? viewport.width : 1920
  const videoEndHeight = isResponsiveHero ? mobileEndHeight : 1080
  const videoWidth = videoStartWidth + ((videoEndWidth - videoStartWidth) * easedExpansion)
  const videoHeight = videoStartHeight + ((videoEndHeight - videoStartHeight) * easedExpansion)
  const videoRotation = -6.5 * (1 - easedExpansion)
  const titleMotionScale = isTabletHero ? .36 : isResponsiveHero ? .22 : 1

  const titlePieceStyle = (x, y, fadeStart, clipDirection) => {
    if (textProgress === 0) return undefined

    const exitProgress = Math.min(1, Math.max(0, (textProgress - fadeStart) / (1 - fadeStart)))
    const clipPath = clipDirection === 'up'
      ? `inset(${exitProgress * 100}% 0 0 0)`
      : `inset(0 0 ${exitProgress * 100}% 0)`

    return {
      transform: `translate3d(${x * textProgress * titleMotionScale}px, ${y * textProgress * titleMotionScale}px, 0)`,
      opacity: 1 - (exitProgress * .22),
      clipPath,
    }
  }

  return (
    <section className="hero-section" aria-label="Vivienne Westwood introduction" data-entered={hasEntered} ref={sectionRef}>
      <div className="hero-section__sticky">
      <p className="hero-section__caption hero-section__caption--left">
        London, England
        <br />
        Established 1971
        <br />
        British Fashion House
        <br />
        Independent Luxury
      </p>

      <p className="hero-section__caption hero-section__caption--right">
        fashion house rooted in London,
        <br />
        where heritage tailoring meets
        <br />
        rebellious creativity and
        <br />
        timeless craftsmanship.
      </p>

      <h1 className="hero-section__title hero-section__title--top" aria-label="BREAK THE RULES">
        <span className="hero-section__title-piece hero-section__title-piece--top-break" style={titlePieceStyle(-138, -126, .46, 'up')}>BREAK</span>
        <span className="hero-section__title-piece hero-section__title-piece--top-the" style={titlePieceStyle(-42, -174, .34, 'up')}>THE</span>
        <span className="hero-section__title-piece hero-section__title-piece--top-rules-a" style={titlePieceStyle(92, -116, .2, 'up')}>RU</span>
        <span className="hero-section__title-piece hero-section__title-piece--top-rules-b" style={titlePieceStyle(184, 58, .12, 'down')}>LES</span>
      </h1>
      <p className="hero-section__title hero-section__title--bottom" aria-label="REMAKE FASHION">
        <span className="hero-section__title-piece hero-section__title-piece--bottom-remake-a" style={titlePieceStyle(-174, 106, .16, 'down')}>RE</span>
        <span className="hero-section__title-piece hero-section__title-piece--bottom-remake-b" style={titlePieceStyle(-76, 182, .28, 'down')}>MAKE</span>
        <span className="hero-section__title-piece hero-section__title-piece--bottom-fashion-a" style={titlePieceStyle(104, 112, .2, 'down')}>FASH</span>
        <span className="hero-section__title-piece hero-section__title-piece--bottom-fashion-b" style={titlePieceStyle(208, 172, .34, 'down')}>ION</span>
      </p>

      <div className="hero-section__card-deck" style={{ opacity: 1 - easedExpansion }}>
        <ColorCard variant="back-03" label="dark" />
        <ColorCard variant="back-02" label="tartan" />
        <ColorCard variant="back-01" label="ivory" />
      </div>

      <div className="hero-section__front-card" aria-label="Vivienne Westwood AI runway video">
        <div className="hero-section__front-motion">
          <div className="hero-section__poster-content" style={{ width: `${videoWidth}px`, height: `${videoHeight}px`, transform: `translate3d(-50%, -50%, 0) rotate(${videoRotation}deg)` }}>
            <video className="hero-section__poster" autoPlay muted loop playsInline preload="metadata" poster="/images/hero-poster.jpeg" aria-hidden="true" tabIndex="-1">
              <source src="/videos/vivienne-westwood-ai-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
