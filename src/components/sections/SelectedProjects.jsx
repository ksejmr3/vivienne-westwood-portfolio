import './SelectedProjects.css'

const projects = [
  {
    id: 'project-tartan-orbit',
    image: '/images/project-01.png',
    alt: 'Orb necklace on tartan and antique fabric',
    angle: -16,
    frame: { left: 158, top: 300, width: 514.158, height: 654.711 },
  },
  {
    id: 'project-kings-road',
    image: '/images/project-02.png',
    alt: 'Historic fashion shop on a London street',
    angle: -10,
    frame: { left: 398.852, top: 250, width: 464.227, height: 630.514 },
  },
  {
    id: 'project-atelier',
    image: '/images/project-03.png',
    alt: 'Designer working on a garment in the atelier',
    angle: -4,
    frame: { left: 652.75, top: 220, width: 409.209, height: 599.409 },
    imageClass: 'selected-projects__image--atelier',
  },
  {
    id: 'project-rebellion-campaign',
    image: '/images/project-04.png',
    alt: 'Model in a dark collection against a graphic wall',
    angle: 4,
    frame: { left: 869.22, top: 220, width: 409.209, height: 599.409 },
  },
  {
    id: 'project-couture-editorial',
    image: '/images/project-05.png',
    alt: 'Model wearing a sculptural ivory and rose garment',
    angle: 10,
    frame: { left: 1050.75, top: 250, width: 464.227, height: 630.514 },
    imageClass: 'selected-projects__image--couture',
  },
  {
    id: 'project-runway',
    image: '/images/project-06.png',
    alt: 'Model walking the runway in a dramatic ivory gown',
    angle: 16,
    frame: { left: 1247.07, top: 300, width: 514.158, height: 654.711 },
    imageClass: 'selected-projects__image--runway',
  },
]

function ProjectCard({ project, index }) {
  const { id, image, alt, angle, frame, imageClass = '' } = project

  return (
    <div
      className="selected-projects__card-frame"
      style={{
        '--card-left': `${frame.left}px`,
        '--card-top': `${frame.top}px`,
        '--card-frame-width': `${frame.width}px`,
        '--card-frame-height': `${frame.height}px`,
        '--card-angle': `${angle}deg`,
        '--card-layer': index + 1,
      }}
    >
      <article className="selected-projects__card" data-project-id={id}>
        <img className={`selected-projects__image ${imageClass}`} src={image} alt={alt} />
        <span className="selected-projects__overlay" aria-hidden="true" />
      </article>
    </div>
  )
}

export default function SelectedProjects() {
  return (
    <section className="selected-projects" aria-labelledby="selected-projects-title">
      <h2 className="selected-projects__title" id="selected-projects-title">
        SELECTED PROJECTS
      </h2>

      <div className="selected-projects__project-stack" aria-label="Selected projects">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="selected-projects__all-projects">
        <span>VIEW ALL PROJECTS</span>
        <img src="/icons/projects-arrow.svg" alt="" />
      </div>
    </section>
  )
}
