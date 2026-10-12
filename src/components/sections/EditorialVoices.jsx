import './EditorialVoices.css'

const publications = [
  { id: 'vogue', name: 'VOGUE', active: true, width: 62 },
  { id: 'dazed', name: 'DAZED', width: 59 },
  { id: 'elle', name: 'ELLE', width: 43 },
  { id: 'i-d', name: 'i-D', width: 23 },
]

const quoteLines = [
  'Vivienne Westwood transformed British ',
  'heritage into a radical visual language, ',
  'bringing historical tailoring, sculptural ',
  'construction and punk defiance together ',
  'in one unmistakable identity. ',
  ' ',
  'Her work expanded the meaning of luxury, ',
  'proving that tradition could be preserved, ',
  'challenged and completely reinvented.',
]

export default function EditorialVoices() {
  return (
    <section className="editorial-voices" aria-label="Editorial Voices">
      <div className="editorial-voices__panel">
        <nav className="editorial-voices__publications" aria-label="Publications">
          {publications.map(({ id, name, active, width }) => (
            <span
              className={`editorial-voices__publication${active ? ' editorial-voices__publication--active' : ''}`}
              key={id}
              style={{ '--publication-width': `${width}px` }}
            >
              {name}
            </span>
          ))}
        </nav>

        <div className="editorial-voices__intro">
          <h2 className="editorial-voices__title">
            <span>EDITORIAL </span>
            <span>VOICES</span>
          </h2>
          <p className="editorial-voices__eyebrow">BRITISH ICON / RADICAL TAILORING</p>
        </div>

        <blockquote className="editorial-voices__quote">
          {quoteLines.map((line, index) => (
            <span className="editorial-voices__quote-line" key={`${index}-${line}`}>
              {line || '\u00a0'}
            </span>
          ))}
        </blockquote>
      </div>
    </section>
  )
}
