import { useState } from 'react'
import './EditorialVoices.css'

const publications = [
  { id: 'vogue', name: 'VOGUE', width: 62 },
  { id: 'dazed', name: 'DAZED', width: 59 },
  { id: 'elle', name: 'ELLE', width: 43 },
  { id: 'i-d', name: 'i-D', width: 23 },
]

const editorialContent = {
  vogue: {
    subject: 'BRITISH ICON / RADICAL TAILORING',
    body: 'Vivienne Westwood transformed traditional British tailoring into a language of individuality. Her work challenged convention while redefining the relationship between fashion, history and rebellion.',
  },
  dazed: {
    subject: 'PUNK CULTURE / REBELLION',
    body: 'Punk was never simply an aesthetic. Through provocative silhouettes and unconventional details, Westwood turned fashion into a powerful expression of resistance and creative freedom.',
  },
  elle: {
    subject: 'FEMININITY / FASHION LEGACY',
    body: 'Westwood reimagined femininity through sculptural corsetry, dramatic proportions and historical references. Her designs continue to inspire a fearless approach to personal expression.',
  },
  'i-d': {
    subject: 'YOUTH CULTURE / IDENTITY',
    body: "From London's underground culture to a new generation of independent thinkers, Westwood's influence celebrates identity, experimentation and the courage to challenge expectations.",
  },
}

export default function EditorialVoices() {
  const [activePublication, setActivePublication] = useState('vogue')
  const activeContent = editorialContent[activePublication]

  return (
    <section className="editorial-voices" id="editorial" aria-label="Editorial Voices">
      <div className="editorial-voices__panel">
        <nav className="editorial-voices__publications" aria-label="Publications">
          {publications.map(({ id, name, width }) => (
            <button
              className={`editorial-voices__publication${activePublication === id ? ' editorial-voices__publication--active' : ''}`}
              key={id}
              id={`editorial-tab-${id}`}
              type="button"
              aria-pressed={activePublication === id}
              aria-controls="editorial-concept-copy"
              style={{ '--publication-width': `${width}px` }}
              onClick={() => setActivePublication(id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setActivePublication(id)
                }
              }}
            >
              {name}
            </button>
          ))}
        </nav>

        <div className="editorial-voices__intro">
          <h2 className="editorial-voices__title">
            <span>EDITORIAL </span>
            <span>VOICES</span>
          </h2>
          <p className="editorial-voices__eyebrow editorial-voices__content--changing" key={`${activePublication}-subject`}>
            {activeContent.subject}
          </p>
        </div>

        <div
          className="editorial-voices__quote editorial-voices__content--changing"
          id="editorial-concept-copy"
          key={activePublication}
          role="tabpanel"
          aria-labelledby={`editorial-tab-${activePublication}`}
          aria-live="polite"
        >
          <span className="editorial-voices__concept-label">CONCEPT COPY</span>
          <p className="editorial-voices__copy">{activeContent.body}</p>
        </div>
      </div>
    </section>
  )
}
