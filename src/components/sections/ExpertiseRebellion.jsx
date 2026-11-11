import './ExpertiseRebellion.css'

const rebellionCopy = [
  'Vivienne Westwood challenged the conventions of fashion',
  'through punk culture, political activism and fearless',
  'creativity. Every collection continues to question,',
  'provoke and redefine what fashion can represent.',
]

export default function ExpertiseRebellion() {
  return (
    <section
      className="expertise-rebellion"
      aria-labelledby="expertise-rebellion-title"
    >
      <div className="expertise-rebellion__image-bounds" aria-hidden="true">
        <div className="expertise-rebellion__image-rotation">
          <div className="expertise-rebellion__image-crop">
            <img
              className="expertise-rebellion__image"
              src="/images/expertise-rebellion.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="expertise-rebellion__counter" aria-label="Expertise 3 of 3">
        <span>3</span>
      </div>

      <p className="expertise-rebellion__description">
        {rebellionCopy.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>

      <h2 className="expertise-rebellion__title" id="expertise-rebellion-title">
        REBELLION
      </h2>

      <div className="expertise-rebellion__divider" aria-hidden="true" />
      <a className="expertise-rebellion__cta-label" href="#/expertise/rebellion">Explore Rebellion →</a>
    </section>
  )
}
