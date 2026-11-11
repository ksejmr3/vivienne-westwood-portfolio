import { useEffect, useState } from 'react'
import Header from './components/layout/Header.jsx'
import Hero from './components/sections/Hero.jsx'
import LatestCollection from './components/sections/LatestCollection.jsx'
import HouseObjects from './components/sections/HouseObjects.jsx'
import SelectedProjects from './components/sections/SelectedProjects.jsx'
import HouseIntro from './components/sections/HouseIntro.jsx'
import ExpertiseHeritage from './components/sections/ExpertiseHeritage.jsx'
import ExpertiseCraftsmanship from './components/sections/ExpertiseCraftsmanship.jsx'
import ExpertiseRebellion from './components/sections/ExpertiseRebellion.jsx'
import LatestNews from './components/sections/LatestNews.jsx'
import HouseCodes from './components/sections/HouseCodes.jsx'
import EditorialVoices from './components/sections/EditorialVoices.jsx'
import Footer from './components/sections/Footer.jsx'
import {
  CollectionPage,
  DemoPage,
  ExpertisePage,
  NewsIndexPage,
  NewsStoryPage,
  NotFoundPage,
} from './components/pages/ConceptPages.jsx'

function getRoute() {
  const hash = window.location.hash
  if (!hash || hash === '#') return 'home'
  return decodeURIComponent(hash.replace(/^#\/?/, '')).replace(/^\/+|\/+$/g, '') || 'home'
}

function HomePage() {
  return (
    <main className="portfolio">
      <Header />
      <Hero />
      <div className="portfolio__responsive-collection">
        <LatestCollection />
      </div>
      <div className="portfolio__responsive-section">
        <HouseObjects />
      </div>
      <div className="portfolio__responsive-section">
        <SelectedProjects />
      </div>
      <div className="portfolio__responsive-section">
        <HouseIntro />
        <ExpertiseHeritage />
        <ExpertiseCraftsmanship />
        <ExpertiseRebellion />
      </div>
      <div className="portfolio__legacy-sections">
        <LatestNews />
      </div>
      <div className="portfolio__responsive-section">
        <HouseCodes />
      </div>
      <div className="portfolio__legacy-sections">
        <EditorialVoices />
        <Footer />
      </div>
    </main>
  )
}

function DetailPage({ route }) {
  const [section, slug] = route.split('/')
  let content

  if (section === 'news' && !slug) content = <NewsIndexPage />
  else if (section === 'news') content = <NewsStoryPage slug={slug} />
  else if (section === 'expertise') content = <ExpertisePage slug={slug} />
  else if (section === 'collection') content = <CollectionPage />
  else if (section === 'demo') content = <DemoPage slug={slug} />
  else content = <NotFoundPage />

  return (
    <div className="concept-shell">
      <Header />
      {content}
    </div>
  )
}

function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const [, target] = route.split('/')
    const frame = window.requestAnimationFrame(() => {
      if (route.startsWith('home/') && target) {
        document.getElementById(target)?.scrollIntoView({ block: 'start' })
      } else {
        window.scrollTo({ top: 0, left: 0 })
      }
    })
    return () => window.cancelAnimationFrame(frame)
  }, [route])

  if (route === 'home' || route.startsWith('home/')) return <HomePage />
  return <DetailPage route={route} />
}

export default App
