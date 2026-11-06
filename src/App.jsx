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

function App() {
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

export default App
