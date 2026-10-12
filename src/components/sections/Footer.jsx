import './Footer.css'

const navigationItems = [
  { id: 'home', label: 'HOME', width: 49 },
  { id: 'collection', label: 'COLLECTION', width: 103 },
  { id: 'projects', label: 'PROJECTS', width: 84 },
  { id: 'house-codes', label: 'HOUSE CODES', width: 118 },
  { id: 'editorial', label: 'EDITORIAL', width: 86 },
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

      <p className="site-footer__collection-cta"> EXPLORE THE COLLECTION →</p>

      <div className="site-footer__meta" aria-label="House details">
        <span>LONDON </span>
        <span>SINCE 1971 </span>
        <span>BRITISH FASHION HOUSE</span>
      </div>

      <nav className="site-footer__navigation" aria-label="Footer navigation">
        {navigationItems.map(({ id, label, width }) => (
          <span className="site-footer__navigation-item" key={id} style={{ '--item-width': `${width}px` }}>
            {label}
          </span>
        ))}
      </nav>

      <div className="site-footer__social" aria-label="Social media">
        {socialItems.map(({ id, label, width }) => (
          <span className="site-footer__social-item" key={id} style={{ '--item-width': `${width}px` }}>
            {label}
          </span>
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
