import './Hero.css'

function ColorCard({ variant, label }) {
  return (
    <div className={`hero__card hero__card--${variant}`} aria-hidden="true">
      <div className="hero__card-face" data-label={label} />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Vivienne Westwood introduction">
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

      <h1 className="hero-section__title hero-section__title--top">BREAK THE RULES</h1>
      <p className="hero-section__title hero-section__title--bottom">REMAKE FASHION</p>

      <ColorCard variant="back-03" label="dark" />
      <ColorCard variant="back-02" label="tartan" />
      <ColorCard variant="back-01" label="ivory" />

      <div className="hero-section__front-card" aria-label="Collection campaign poster">
        <div className="hero-section__poster-content">
          <img className="hero-section__poster" src="/images/hero-poster.jpeg" alt="Vivienne Westwood runway look in tartan" />
          <img className="hero-section__play-icon" src="/icons/play.svg" alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
