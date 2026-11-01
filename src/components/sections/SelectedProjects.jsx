import { useEffect, useState } from 'react'
import './SelectedProjects.css'

const projects = [
  {
    id: 'project-tartan-orbit',
    image: '/images/project-01.png',
    alt: 'Orb necklace on tartan and antique fabric',
    angle: -16,
    frame: { left: 158, top: 300, width: 514.158, height: 654.711 },
    activeOffset: { x: 658.741, y: -67.655 },
    category: 'HOUSE CODES / ICONS',
    copy: 'Orb, corset, tartan and pearls define the visual language of the house.',
  },
  {
    id: 'project-kings-road',
    image: '/images/project-02.png',
    alt: 'Historic fashion shop on a London street',
    angle: -10,
    frame: { left: 398.852, top: 250, width: 464.227, height: 630.514 },
    activeOffset: { x: 442.854, y: -5.557 },
    category: 'ARCHIVE / SINCE 1971',
    copy: 'From the SEX boutique to decades of radical fashion history.',
  },
  {
    id: 'project-atelier',
    image: '/images/project-03.png',
    alt: 'Designer working on a garment in the atelier',
    angle: -4,
    frame: { left: 652.75, top: 220, width: 409.209, height: 599.409 },
    activeOffset: { x: 216.466, y: 39.996 },
    imageClass: 'selected-projects__image--atelier',
    category: 'DETAIL / CONSTRUCTION',
    copy: 'Corsetry, tailoring and hand-finished details at close range.',
  },
  {
    id: 'project-rebellion-campaign',
    image: '/images/project-04.png',
    alt: 'Model in a dark collection against a graphic wall',
    angle: 4,
    frame: { left: 869.22, top: 220, width: 409.209, height: 599.409 },
    activeOffset: { x: -0.005, y: 39.996 },
    category: 'CAMPAIGN / BRAND STORY',
    copy: 'A visual narrative built around rebellion, identity and culture.',
  },
  {
    id: 'project-couture-editorial',
    image: '/images/project-05.png',
    alt: 'Model wearing a sculptural ivory and rose garment',
    angle: 10,
    frame: { left: 1050.75, top: 250, width: 464.227, height: 630.514 },
    activeOffset: { x: -209.044, y: -5.557 },
    imageClass: 'selected-projects__image--couture',
    category: 'EDITORIAL / SEASON LOOK',
    copy: 'Styling the house codes through a sharper editorial lens.',
  },
  {
    id: 'project-runway',
    image: '/images/project-06.png',
    alt: 'Model walking the runway in a dramatic ivory gown',
    angle: 16,
    frame: { left: 1247.07, top: 300, width: 514.158, height: 654.711 },
    activeOffset: { x: -430.329, y: -67.655 },
    imageClass: 'selected-projects__image--runway',
    category: 'RUNWAY / SEASON 2026',
    copy: 'A study of movement, silhouette and theatrical attitude.',
  },
]

function ProjectCard({ project, index, active, onActivate }) {
  const { id, image, alt, angle, frame, activeOffset, imageClass = '', category } = project

  return (
    <div
      className={`selected-projects__card-frame${active ? ' selected-projects__card-frame--active' : ''}`}
      style={{
        '--card-left': `${frame.left}px`,
        '--card-top': `${frame.top}px`,
        '--card-frame-width': `${frame.width}px`,
        '--card-frame-height': `${frame.height}px`,
        '--card-angle': `${angle}deg`,
        '--card-layer': index + 1,
        '--active-x': `${activeOffset.x}px`,
        '--active-y': `${activeOffset.y}px`,
      }}
    >
      <button className="selected-projects__card" type="button" data-project-id={id} onFocus={onActivate} onPointerEnter={onActivate} aria-label={category}>
        <img className={`selected-projects__image ${imageClass}`} src={image} alt={alt} />
        <span className="selected-projects__overlay" aria-hidden="true" />
      </button>
    </div>
  )
}

export default function SelectedProjects() {
  const [activeId, setActiveId] = useState(null)
  const [displayedId, setDisplayedId] = useState(null)
  const [infoVisible, setInfoVisible] = useState(false)
  const displayedProject = projects.find((project) => project.id === displayedId)

  const activateProject = (id) => {
    setInfoVisible(false)
    setActiveId(id)
  }

  const clearActiveProject = () => {
    setInfoVisible(false)
    setDisplayedId(null)
    setActiveId(null)
  }

  useEffect(() => {
    if (!activeId) return undefined
    const timeout = window.setTimeout(() => {
      setDisplayedId(activeId)
      setInfoVisible(true)
    }, 160)
    return () => window.clearTimeout(timeout)
  }, [activeId])

  return (
    <section className="selected-projects" aria-labelledby="selected-projects-title">
      <h2 className="selected-projects__title" id="selected-projects-title">
        SELECTED PROJECTS
      </h2>

      <div className="selected-projects__project-stack" aria-label="Selected projects" onPointerLeave={clearActiveProject} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) clearActiveProject() }}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} active={project.id === activeId} onActivate={() => activateProject(project.id)} />
        ))}
        <div className={`selected-projects__project-info${displayedProject && infoVisible ? ' selected-projects__project-info--visible' : ''}`} aria-live="polite">
          {displayedProject && <><p>{displayedProject.category}</p><p>{displayedProject.copy}</p></>}
        </div>
      </div>

      <div className="selected-projects__all-projects">
        <span>VIEW ALL PROJECTS</span>
        <img src="/icons/projects-arrow.svg" alt="" />
      </div>
    </section>
  )
}
