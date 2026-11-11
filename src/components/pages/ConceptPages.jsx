import { demoDestinations, expertiseStories, newsStories } from '../../data/conceptPages.js'
import './ConceptPages.css'

const collectionImages = ['/images/collection-01.png', '/images/collection-02.png', '/images/collection-03.png']
const Notice = () => <p className="concept-page__notice">CONCEPT EDITORIAL · PERSONAL PORTFOLIO REDESIGN · NOT AN OFFICIAL BRAND PAGE</p>
const Back = ({ href = '#/home' }) => <a className="concept-page__back" href={href}>← BACK</a>

export function NewsIndexPage() {
  return (
    <main className="concept-page concept-page--news-index">
      <header className="concept-page__top"><Back href="#/home/news" /><Notice /></header>
      <p className="concept-page__eyebrow">EDITORIAL / NEWS</p>
      <h1 className="concept-page__display">LATEST<br />STORIES</h1>
      <div className="concept-page__news-grid">
        {newsStories.map((story, index) => (
          <a className="concept-page__news-card" href={`#/news/${story.slug}`} key={story.slug}>
            <span>0{index + 1} / {story.category}</span>
            <img src={story.image} alt={story.imageAlt} />
            <h2>{story.title}</h2>
            <strong>READ CONCEPT STORY →</strong>
          </a>
        ))}
      </div>
    </main>
  )
}

export function NewsStoryPage({ slug }) {
  const story = newsStories.find((item) => item.slug === slug)
  if (!story) return <NotFoundPage />
  return (
    <main className="concept-page concept-page--story">
      <div className="concept-page__top"><Back href="#/news" /><Notice /></div>
      <header className="concept-page__story-header">
        <p className="concept-page__eyebrow">{story.category} / CONCEPT STORY</p>
        <h1>{story.title}</h1>
        <p className="concept-page__lede">{story.intro}</p>
      </header>
      <figure className="concept-page__story-image">
        <img src={story.image} alt={story.imageAlt} />
        <figcaption>IMAGE USED IN THIS PERSONAL REDESIGN PROJECT</figcaption>
      </figure>
      <article className="concept-page__body">{story.body.map((text) => <p key={text}>{text}</p>)}</article>
      <nav className="concept-page__related" aria-label="Related concept stories">
        <p>CONTINUE READING</p>
        <div>{newsStories.filter((item) => item.slug !== slug).map((item) => (
          <a href={`#/news/${item.slug}`} key={item.slug}>{item.title} →</a>
        ))}</div>
      </nav>
    </main>
  )
}

export function ExpertisePage({ slug }) {
  const story = expertiseStories[slug]
  if (!story) return <NotFoundPage />
  return (
    <main className="concept-page concept-page--expertise" style={{ '--concept-surface': story.surface, '--concept-accent': story.accent }}>
      <div className="concept-page__top"><Back href="#/home/house-intro" /><Notice /></div>
      <div className="concept-page__expertise-grid">
        <div>
          <p className="concept-page__eyebrow">{story.category} / CONCEPT ESSAY</p>
          <h1>{story.title}</h1>
          <p className="concept-page__lede">{story.intro}</p>
          <div className="concept-page__body">{story.body.map((text) => <p key={text}>{text}</p>)}</div>
        </div>
        <figure className="concept-page__expertise-image"><img src={story.image} alt={story.imageAlt} /></figure>
      </div>
      <nav className="concept-page__expertise-nav" aria-label="House code concept pages">
        {Object.entries(expertiseStories).map(([key, item]) => (
          <a href={`#/expertise/${key}`} aria-current={key === slug ? 'page' : undefined} key={key}>{item.title}</a>
        ))}
      </nav>
    </main>
  )
}

export function CollectionPage() {
  return (
    <main className="concept-page concept-page--collection">
      <div className="concept-page__top"><Back href="#/home/collection" /><Notice /></div>
      <header className="concept-page__collection-header">
        <p className="concept-page__eyebrow">COLLECTION / CONCEPT LOOKBOOK</p>
        <h1>REMAKE<br />FASHION</h1>
        <p>A fictional digital lookbook assembled from the existing portfolio imagery.</p>
      </header>
      <div className="concept-page__collection-collage">
        {collectionImages.map((image, index) => (
          <figure key={image}>
            <img src={image} alt={`Collection concept look ${index + 1}`} />
            <figcaption>LOOK 0{index + 1}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  )
}

export function DemoPage({ slug }) {
  const destination = demoDestinations[slug]
  if (!destination) return <NotFoundPage />
  return (
    <main className="concept-page concept-page--demo">
      <Back />
      <div className="concept-page__demo-content">
        <p className="concept-page__eyebrow">FRONT-END DEMO STATE</p>
        <h1>{destination.title}</h1>
        <p>{destination.message}</p>
        <strong>NO LOGIN, COMMERCE OR EXTERNAL SERVICE IS ACTIVE.</strong>
        <a href="#/home">RETURN TO THE CONCEPT SITE →</a>
      </div>
    </main>
  )
}

export function NotFoundPage() {
  return (
    <main className="concept-page concept-page--demo">
      <Back />
      <div className="concept-page__demo-content">
        <p className="concept-page__eyebrow">404 / CONCEPT SITE</p>
        <h1>Page not found</h1>
        <a href="#/home">RETURN HOME →</a>
      </div>
    </main>
  )
}
