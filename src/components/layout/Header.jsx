import { useEffect, useRef, useState } from 'react'
import './Header.css'

const navigation = [
  { label: 'Collection', href: '#collection' },
  { label: 'Projects', href: '#projects' },
  { label: 'House Codes', href: '#house-codes' },
  { label: 'Editorial', href: '#editorial' },
]

function HeaderIcon({ src, alt, className = '' }) {
  return <img className={`site-header__icon ${className}`} src={src} alt={alt} />
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const firstMenuLinkRef = useRef(null)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const onResize = () => {
      if (window.innerWidth > 900) setIsMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    firstMenuLinkRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header" aria-label="Site header" data-menu-open={isMenuOpen}>
      <div className="site-header__logo-frame">
        <img className="site-header__logo" src="/icons/logo.svg" alt="Vivienne Westwood" />
      </div>

      <nav className="site-header__nav" aria-label="Main navigation">
        {navigation.map(({ label, href }) => (
          <a className="site-header__nav-item" href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>

      <div className="site-header__actions" aria-label="Account and shopping" role="group">
        <HeaderIcon src="/icons/person.svg" alt="Account" />
        <HeaderIcon src="/icons/heart.svg" alt="Wishlist" />
        <HeaderIcon src="/icons/bag.svg" alt="Shopping bag" className="site-header__bag" />
      </div>

      <button
        className="site-header__menu-button"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setIsMenuOpen((current) => !current)}
        ref={menuButtonRef}
      >
        <span />
        <span />
      </button>

      <nav className="site-header__mobile-nav" id="mobile-navigation" aria-label="Mobile navigation" hidden={!isMenuOpen}>
        {navigation.map(({ label, href }, index) => (
          <a
            className="site-header__mobile-link"
            href={href}
            key={href}
            onClick={closeMenu}
            ref={index === 0 ? firstMenuLinkRef : undefined}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
