import { useEffect, useState } from 'react'
import './SelectedProjects.css'

const projects = [
  { id: 'project-tartan-orbit', image: '/images/project-01.png', alt: 'Orb necklace on tartan and antique fabric', angle: -16, x: 230.079, y: 339.855, popOut: { x: -70, y: 20, scale: 1.08 }, category: 'HOUSE CODES / ICONS', copy: 'Orb, corset, tartan and pearls define the visual language of the house.' },
  { id: 'project-kings-road', image: '/images/project-02.png', alt: 'Historic fashion shop on a London street', angle: -10, x: 445.963, y: 277.757, popOut: { x: -50, y: 32, scale: 1.07 }, category: 'ARCHIVE / SINCE 1971', copy: 'From the SEX boutique to decades of radical fashion history.' },
  { id: 'project-atelier', image: '/images/project-03.png', alt: 'Designer working on a garment in the atelier', angle: -4, x: 672.354, y: 232.204, popOut: { x: -24, y: 40, scale: 1.06 }, imageClass: 'selected-projects__image--atelier', category: 'DETAIL / CONSTRUCTION', copy: 'Corsetry, tailoring and hand-finished details at close range.' },
  { id: 'project-rebellion-campaign', image: '/images/project-04.png', alt: 'Model in a dark collection against a graphic wall', angle: 4, x: 888.824, y: 232.204, popOut: { x: 0, y: 40, scale: 1.06 }, category: 'CAMPAIGN / BRAND STORY', copy: 'A visual narrative built around rebellion, identity and culture.' },
  { id: 'project-couture-editorial', image: '/images/project-05.png', alt: 'Model wearing a sculptural ivory and rose garment', angle: 10, x: 1097.863, y: 277.757, popOut: { x: 50, y: 32, scale: 1.07 }, imageClass: 'selected-projects__image--couture', category: 'EDITORIAL / SEASON LOOK', copy: 'Styling the house codes through a sharper editorial lens.' },
  { id: 'project-runway', image: '/images/project-06.png', alt: 'Model walking the runway in a dramatic ivory gown', angle: 16, x: 1319.149, y: 339.855, popOut: { x: 70, y: 20, scale: 1.08 }, imageClass: 'selected-projects__image--runway', category: 'RUNWAY / SEASON 2026', copy: 'A study of movement, silhouette and theatrical attitude.' },
]

function ProjectCard({ project, index, active, responsive, onActivate, onDeactivate }) {
  const activate = (event) => {
    onActivate()
    if (responsive && event.type === 'click') {
      event.currentTarget.parentElement?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest', inline: 'center' })
    }
  }

  return (
    <div className={`selected-projects__card-frame${active ? ' is-active' : ''}`} onFocusCapture={onActivate} style={{ '--card-left': `${project.x}px`, '--card-top': `${project.y}px`, '--card-rotation': `${project.angle}deg`, '--mobile-rotation': `${project.angle * .32}deg`, '--card-layer': index + 1, '--popout-x': `${project.popOut.x}px`, '--popout-y': `${project.popOut.y}px`, '--popout-scale': project.popOut.scale }}>
      <button className="selected-projects__card" type="button" aria-label={`${index + 1} of ${projects.length}: ${project.category}`} aria-pressed={active} onClick={activate} onPointerEnter={(event) => { if (event.pointerType === 'mouse') onActivate() }} onPointerLeave={(event) => { if (event.pointerType === 'mouse' && document.activeElement !== event.currentTarget) onDeactivate() }}>
        <img className={`selected-projects__image ${project.imageClass ?? ''}`} src={project.image} alt={project.alt} />
        <span className="selected-projects__overlay" aria-hidden="true" />
      </button>
    </div>
  )
}

export default function SelectedProjects() {
  const [responsive, setResponsive] = useState(() => window.innerWidth <= 900)
  const [activeIndex, setActiveIndex] = useState(() => window.innerWidth <= 900 ? 0 : null)
  const activeProject = activeIndex === null ? null : projects[activeIndex]

  useEffect(() => {
    const onResize = () => {
      const nextResponsive = window.innerWidth <= 900
      setResponsive(nextResponsive)
      setActiveIndex((current) => nextResponsive ? current ?? 0 : null)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <section className="selected-projects" id="projects" aria-labelledby="selected-projects-title">
      <h2 className="selected-projects__title" id="selected-projects-title">SELECTED PROJECTS</h2>
      <div className="selected-projects__project-stack" aria-label="Selected projects" onPointerLeave={(event) => { if (!responsive && !event.currentTarget.contains(document.activeElement)) setActiveIndex(null) }} onBlur={(event) => { if (!responsive && !event.currentTarget.contains(event.relatedTarget)) setActiveIndex(null) }}>
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} active={activeIndex === index} responsive={responsive} onActivate={() => setActiveIndex(index)} onDeactivate={() => setActiveIndex(responsive ? index : null)} />)}
      </div>
      <div className={`selected-projects__project-info${activeProject ? ' is-visible' : ''}`} role="status" aria-live="polite" aria-hidden={!activeProject}>
        {activeProject && <>
          <p className="selected-projects__category">{activeProject.category}</p>
          <p className="selected-projects__copy">{activeProject.copy}</p>
        </>}
      </div>
    </section>
  )
}
