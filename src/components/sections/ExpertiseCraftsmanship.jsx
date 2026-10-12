import './ExpertiseCraftsmanship.css'

const craftsmanshipCopy = [
  'Every collection reflects exceptional craftsmanship,',
  'from structured corsetry to handcrafted textiles.',
  'Traditional tailoring techniques meet experimental',
  'construction, creating garments that balance heritage',
  'with contemporary innovation.',
]

export default function ExpertiseCraftsmanship() {
  return (
    <section
      className="expertise-craftsmanship"
      aria-labelledby="expertise-craftsmanship-title"
    >
      <div className="expertise-craftsmanship__image-bounds" aria-hidden="true">
        <div className="expertise-craftsmanship__image-rotation">
          <img
            className="expertise-craftsmanship__image"
            src="/images/expertise-craftsmanship.png"
            alt=""
          />
        </div>
      </div>

      <div className="expertise-craftsmanship__counter" aria-label="Expertise 2 of 3">
        <span>2</span>
      </div>

      <p className="expertise-craftsmanship__description">
        {craftsmanshipCopy.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>

      <h2
        className="expertise-craftsmanship__title"
        id="expertise-craftsmanship-title"
      >
        <span>CRAFTS</span>
        <span>MANSHIP</span>
      </h2>

      <p className="expertise-craftsmanship__cta-label">
        Explore Craftsmanship →
      </p>
      <div className="expertise-craftsmanship__divider" aria-hidden="true" />
    </section>
  )
}
