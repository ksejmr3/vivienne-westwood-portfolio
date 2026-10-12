import './HouseCodes.css'

const codes = [
  { id: 'orb', text: 'ORB', color: 'vivienne-red' },
  { id: 'corset', text: 'CORSET' },
  { id: 'tartan', text: 'TARTAN', color: 'tartan-red' },
  { id: 'punk', text: 'PUNK' },
  { id: 'pearls', text: 'PEARLS' },
  { id: 'london', text: 'LONDON' },
  { id: 'activism', text: 'ACTIVISM' },
  { id: 'heritage', text: 'HERITAGE' },
  { id: 'draping', text: 'DRAPING' },
  { id: 'platform', text: 'PLATFORM' },
  { id: 'archive', text: 'ARCHIVE' },
  { id: 'chain', text: 'CHAIN' },
  { id: 'tailoring', text: 'TAILORING' },
  { id: 'safety-pin', text: 'SAFETY PIN' },
  { id: 'red-label', text: 'RED LABEL' },
]

const captions = [
  { id: 'british-heritage', text: 'British Heritage' },
  { id: 'house-symbol', text: 'House Symbol' },
  { id: 'radical-tailoring', text: 'Radical Tailoring' },
  { id: 'handcrafted', text: 'Handcrafted' },
  { id: 'punk-origin', text: 'Punk Origin' },
  { id: 'since-1971', text: 'Since 1971' },
]

export default function HouseCodes() {
  return (
    <section className="house-codes" aria-label="House Codes">
      {codes.map(({ id, text, color }) => (
        <p
          className={`house-codes__word house-codes__word--${id}${color ? ` house-codes__word--${color}` : ''}`}
          key={id}
        >
          {text}
        </p>
      ))}

      {captions.map(({ id, text }) => (
        <p className={`house-codes__caption house-codes__caption--${id}`} key={id}>
          {text}
        </p>
      ))}
    </section>
  )
}
