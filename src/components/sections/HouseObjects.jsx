import './HouseObjects.css'

const products = [
  { name: 'Mini Bas Relief Necklace', image: '/images/necklace-01.png' },
  { name: 'Rigomerta Drop Pearl Necklace', image: '/images/necklace-02.png' },
  { name: 'Victorine Necklace', image: '/images/necklace-03.png' },
  { name: 'Baya Drop Necklace', image: '/images/necklace-04.png' },
  { name: 'Chaos Pearl Necklace', image: '/images/necklace-05.png' },
  { name: 'Lucrece Necklace', image: '/images/necklace-06.png' },
]

function ProductCard({ name, image }) {
  return (
    <article className="house-objects__card">
      <div className="house-objects__image-frame">
        <img className="house-objects__image" src={image} alt={name} />
      </div>
      <p className="house-objects__product-name">{name}</p>
    </article>
  )
}

export default function HouseObjects() {
  return (
    <section className="house-objects" aria-labelledby="house-objects-title">
      <h2 className="house-objects__title" id="house-objects-title">HOUSE OBJECTS</h2>

      <div className="house-objects__arrows" aria-hidden="true">
        <span className="house-objects__arrow house-objects__arrow--previous">
          <img src="/icons/carousel-arrow.svg" alt="" />
        </span>
        <span className="house-objects__arrow house-objects__arrow--next">
          <img src="/icons/carousel-arrow.svg" alt="" />
        </span>
      </div>

      <div className="house-objects__carousel" aria-label="House objects">
        {products.map((product) => <ProductCard key={product.name} {...product} />)}
      </div>
    </section>
  )
}
