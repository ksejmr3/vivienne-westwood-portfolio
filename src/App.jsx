import Header from './components/layout/Header.jsx'
import Hero from './components/sections/Hero.jsx'
import LatestCollection from './components/sections/LatestCollection.jsx'
import HouseObjects from './components/sections/HouseObjects.jsx'
import SelectedProjects from './components/sections/SelectedProjects.jsx'
import HouseIntro from './components/sections/HouseIntro.jsx'

function App() {
  return (
    <main className="portfolio">
      <Header />
      <Hero />
      <LatestCollection />
      <HouseObjects />
      <SelectedProjects />
      <HouseIntro />
    </main>
  )
}

export default App
