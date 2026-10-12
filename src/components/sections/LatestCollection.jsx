import './LatestCollection.css'

const collectionImages = [
  {
    src: '/images/collection-01.png',
    alt: 'Vivienne Westwood collection look in pearl ivory',
    className: 'latest-collection__image-frame--01',
    imageClassName: 'latest-collection__image--01',
  },
  {
    src: '/images/collection-02.png',
    alt: 'Vivienne Westwood collection look in tartan and leather',
    className: 'latest-collection__image-frame--02',
    imageClassName: 'latest-collection__image--02',
  },
  {
    src: '/images/collection-03.png',
    alt: 'Vivienne Westwood runway look in a black tailored outfit',
    className: 'latest-collection__image-frame--03',
    imageClassName: 'latest-collection__image--03',
  },
]

function CollectionState({ active = false, index }) {
  return (
    <span
      className={`latest-collection__state${active ? ' latest-collection__state--active' : ''}`}
      aria-hidden="true"
    >
      <img
        src={active ? '/icons/collection-state-active.svg' : '/icons/collection-state-default.svg'}
        alt=""
      />
      <span className="visually-hidden">Collection image {index}</span>
    </span>
  )
}

export default function LatestCollection() {
  return (
    <section className="latest-collection" aria-label="Latest collection">
      <div className="latest-collection__image-stack" aria-label="Latest collection images">
        {collectionImages.map(({ src, alt, className, imageClassName }, index) => (
          <div className={`latest-collection__image-frame ${className}`} key={src}>
            <img className={`latest-collection__image ${imageClassName}`} src={src} alt={alt} />
          </div>
        ))}
      </div>

      <div className="latest-collection__states" aria-label="Collection image states">
        <CollectionState index={1} />
        <CollectionState index={2} />
        <CollectionState index={3} active />
      </div>

      <p className="latest-collection__eyebrow">LATEST COLLECTION</p>
      <h2 className="latest-collection__title">
        THE HOUSE IN
        <br />
        MOTION
      </h2>
      <p className="latest-collection__description">
        British tailoring, sculptural silhouettes
        <br />
        and rebellious craftsmanship
        <br />
        shaped through movement.
      </p>
    </section>
  )
}
