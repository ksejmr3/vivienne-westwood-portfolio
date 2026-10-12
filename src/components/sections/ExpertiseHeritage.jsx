import './ExpertiseHeritage.css'

const heritageCopy = [
  'Inspired by British heritage and decades of fashion history.',
  'Vivienne Westwood transformed traditional tailoring by',
  'combining classic British craftsmanship with a rebellious',
  'attitude. The House continues to celebrate cultural identity,',
  'historical references and timeless design through every',
  'collection.',
]

export default function ExpertiseHeritage() {
  return (
    <section className="expertise-heritage" aria-labelledby="expertise-heritage-title">
      <div className="expertise-heritage__image-bounds" aria-hidden="true">
        <div className="expertise-heritage__image-rotation">
          <img
            className="expertise-heritage__image"
            src="/images/expertise-heritage.png"
            alt=""
          />
        </div>
      </div>

      <div className="expertise-heritage__counter" aria-label="Expertise 1 of 3">
        <span>1</span>
      </div>

      <p className="expertise-heritage__description">
        {heritageCopy.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>

      <h2 className="expertise-heritage__title" id="expertise-heritage-title">
        HERITAGE
      </h2>

      <p className="expertise-heritage__link-label">Explore Heritage →</p>
      <div className="expertise-heritage__divider" aria-hidden="true" />
    </section>
  )
}
