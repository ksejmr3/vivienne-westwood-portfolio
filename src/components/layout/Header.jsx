import { useEffect, useRef, useState } from 'react'
import './Header.css'

const navigation = [
  { label: 'Collection', href: '#/home/collection' },
  { label: 'Projects', href: '#/home/projects' },
  { label: 'House Codes', href: '#/home/house-codes' },
  { label: 'Editorial', href: '#/home/editorial' },
]

function HeaderIcon({ src, className = '' }) {
  return <img className={`site-header__icon ${className}`} src={src} alt="" />
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
      <a className="site-header__logo-frame" href="#/home" aria-label="Vivienne Westwood concept site home">
        <img className="site-header__logo" src="/icons/logo.svg" alt="Vivienne Westwood" />
      </a>

      <nav className="site-header__nav" aria-label="Main navigation">
        {navigation.map(({ label, href }) => (
          <a className="site-header__nav-item" href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>

      <div className="site-header__actions" aria-label="Account and shopping" role="group">
        <a href="#/demo/account" aria-label="Account demo"><HeaderIcon src="/icons/person.svg" /></a>
        <a href="#/demo/wishlist" aria-label="Wishlist demo"><HeaderIcon src="/icons/heart.svg" /></a>
        <a href="#/demo/bag" aria-label="Shopping bag demo"><HeaderIcon src="/icons/bag.svg" className="site-header__bag" /></a>
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
