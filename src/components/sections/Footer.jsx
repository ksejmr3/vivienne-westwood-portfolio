import './Footer.css'

const navigationItems = [
  { id: 'home', label: 'HOME', width: 49, href: '#/home' },
  { id: 'collection', label: 'COLLECTION', width: 103, href: '#/home/collection' },
  { id: 'projects', label: 'PROJECTS', width: 84, href: '#/home/projects' },
  { id: 'house-codes', label: 'HOUSE CODES', width: 118, href: '#/home/house-codes' },
  { id: 'editorial', label: 'EDITORIAL', width: 86, href: '#/home/editorial' },
]

const socialItems = [
  { id: 'instagram', label: 'INSTAGRAM', width: 81 },
  { id: 'pinterest', label: 'PINTEREST', width: 77 },
  { id: 'youtube', label: 'YOUTUBE', width: 66 },
  { id: 'facebook', label: 'FACEBOOK', width: 75 },
]

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Footer">
      <h2 className="site-footer__wordmark" aria-label="Vivienne Westwood">
        <span>VIVIENNE </span>
        <span>WESTWOOD</span>
      </h2>

      <a className="site-footer__collection-cta" href="#/collection">EXPLORE THE COLLECTION →</a>

      <div className="site-footer__meta" aria-label="House details">
        <span>LONDON </span>
        <span>SINCE 1971 </span>
        <span>BRITISH FASHION HOUSE</span>
      </div>

      <nav className="site-footer__navigation" aria-label="Footer navigation">
        {navigationItems.map(({ id, label, width, href }) => (
          <a className="site-footer__navigation-item" href={href} key={id} style={{ '--item-width': `${width}px` }}>
            {label}
          </a>
        ))}
      </nav>

      <div className="site-footer__social" aria-label="Social media">
        {socialItems.map(({ id, label, width }) => (
          <a className="site-footer__social-item" href={`#/demo/${id}`} key={id} style={{ '--item-width': `${width}px` }}>
            {label}
          </a>
        ))}
      </div>

      <p className="site-footer__copyright">
        <span>© 2026 VIVIENNE WESTWOOD CONCEPT SITE. </span>
        <span>FOR PORTFOLIO PURPOSES ONLY.</span>
      </p>

      <span className="site-footer__copyright-mark" aria-hidden="true">©</span>
    </footer>
  )
}
