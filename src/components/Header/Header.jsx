import "../../styles/components/Header/Header.scss"
import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { routes } from '../../routes.js'
import { Icon } from '../Icons/IconSystem'
import fteb from '../../assets/images/FTebtech-logo/FTEB logo.png'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 100) // Show secondary header after 100px scroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  // Navigation component to avoid repetition
  const Navigation = ({ className = "" }) => (
    <nav className={`main-nav ${mobileMenuOpen ? "active" : ""} ${className}`}>
      <ul className="menu">
        <li className="menu-item">
          <NavLink to={routes.home.path} end onClick={closeMobileMenu}>
            <Icon name="Home" size={20} className="menu-icon" />
            {routes.home.name}
          </NavLink>
        </li>
       
        <li className="menu-item">
          <NavLink to={routes.servicess.path} onClick={closeMobileMenu}>
            <Icon name="Services" size={20} className="menu-icon" />
            {routes.servicess.name}
          </NavLink>
        </li>
        
        <li className="get-quote-container">
          <NavLink className="get-quote-button" to={routes.contact.path} onClick={closeMobileMenu}>
            <Icon name="Contact" size={20} className="" />
            {routes.contact.name}
          </NavLink>
        </li>
      </ul>
    </nav>
  )

  // Logo component to avoid repetition
  const Logo = () => (
    <div className="logo">
      <Link to={routes.home.path} onClick={closeMobileMenu}>
        <img src={fteb} alt="FTEBTECH" />
      </Link>
    </div>
  )

  // Mobile menu toggle component
  const MobileMenuToggle = ({ color }) => (
    <div 
      className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`} 
      onClick={toggleMobileMenu}
      style={{ color }}
    >
      {mobileMenuOpen ? (
        <Icon name="Close" size={24} color="currentColor" />
      ) : (
        <Icon name="Menu" size={24} color="currentColor" />
      )}
    </div>
  )

  return (
    <>
      {/* Primary Header - Always visible in hero section */}
      <header className="header-primary">
        <div className="main-header">
          <div className="wrapper">
            <div className="main-header-inner">
              <Logo />
              <MobileMenuToggle color="var(--color-white)" />
              <Navigation />
            </div>
          </div>
        </div>
      </header>

      {/* Secondary Header - Appears on scroll */}
      <header className={`header-secondary ${scrolled ? "scrolled" : ""}`}>
        <div className="main-header">
          <div className="wrapper">
            <div className="main-header-inner">
              <Logo />
              <MobileMenuToggle color="var(--color-text)" />
              <Navigation />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header