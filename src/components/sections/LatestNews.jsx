import './LatestNews.css'

const newsItems = [
  {
    id: 'collection',
    category: 'COLLECTION',
    titleLines: ['Spring / Summer 2026', 'Collection Unveiled'],
    image: '/images/news-collection.png',
    imageAlt: 'Model walking in the Spring / Summer 2026 collection',
  },
  {
    id: 'runway',
    category: 'RUNWAY',
    titleLines: ['Inside the Latest', 'Runway Presentation'],
    image: '/images/news-runway.png',
    imageAlt: 'Models backstage at a runway presentation',
  },
  {
    id: 'culture',
    category: 'CULTURE',
    titleLines: ['Fashion, Art and', 'Rebellion in Focus'],
    image: '/images/news-culture.png',
    imageAlt: 'Vivienne Westwood fashion against a London poster wall',
  },
]

function NewsItem({ category, titleLines, image, imageAlt, id }) {
  return (
    <article className={`latest-news__item latest-news__item--${id}`}>
      <a className="latest-news__item-link" href={`#/news/${id}`}>
        <img className="latest-news__image" src={image} alt={imageAlt} />
        <p className="latest-news__category">{category}</p>
        <h3 className="latest-news__item-title">
          {titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h3>
      </a>
    </article>
  )
}

function ViewAllNews() {
  return (
    <a className="latest-news__view-all" href="#/news" aria-label="View all concept news">
      <span className="latest-news__view-all-label">VIEW ALL NEWS</span>
      <span className="latest-news__arrow" aria-hidden="true">
        <img src="/icons/news-arrow.svg" alt="" />
      </span>
    </a>
  )
}

export default function LatestNews() {
  return (
    <section className="latest-news" id="news" aria-labelledby="latest-news-title">
      <h2 className="latest-news__title" id="latest-news-title">
        LATEST NEWS
      </h2>

      <div className="latest-news__list">
        <div className="latest-news__divider latest-news__divider--top" aria-hidden="true" />
        <NewsItem {...newsItems[0]} />
        <div className="latest-news__divider latest-news__divider--middle-one" aria-hidden="true" />
        <NewsItem {...newsItems[1]} />
        <div className="latest-news__divider latest-news__divider--middle-two" aria-hidden="true" />
        <NewsItem {...newsItems[2]} />
        <div className="latest-news__divider latest-news__divider--bottom" aria-hidden="true" />
      </div>

      <ViewAllNews />
    </section>
  )
}
