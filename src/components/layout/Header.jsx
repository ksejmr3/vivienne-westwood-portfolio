import './Header.css'

const navigation = ['Collection', 'Projects', 'House Codes', 'Editorial']

function HeaderIcon({ src, alt, className = '' }) {
  return <img className={`site-header__icon ${className}`} src={src} alt={alt} />
}

export default function Header() {
  return (
    <header className="site-header" aria-label="Site header">
      <div className="site-header__logo-frame">
        <img className="site-header__logo" src="/icons/logo.svg" alt="Vivienne Westwood" />
      </div>

      <nav className="site-header__nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <span className="site-header__nav-item" key={item}>
            {item}
          </span>
        ))}
      </nav>

      <div className="site-header__actions" aria-label="Account and shopping" role="group">
        <HeaderIcon src="/icons/person.svg" alt="Account" />
        <HeaderIcon src="/icons/heart.svg" alt="Wishlist" />
        <HeaderIcon src="/icons/bag.svg" alt="Shopping bag" className="site-header__bag" />
      </div>
    </header>
  )
}
