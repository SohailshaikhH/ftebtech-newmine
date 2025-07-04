import "../../styles/components/Header/Header.scss"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { routes } from '../../routes.js'
import { Icon } from '../Icons/IconSystem'
import fteb from '../../assets/images/FTebtech-logo/FTEB logo.png'

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="main-header">
        <div className="wrapper">
          <div className="main-header-inner">
            <div className="logo">
              <Link to={routes.home.path}>
                <img src={fteb} alt="FTEBTECH" />
              </Link>
            </div>

            <div className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <Icon name="Close" size={24} color="currentColor" />
              ) : (
                <Icon name="Menu" size={24} color="currentColor" />
              )}
            </div>

            <nav className={`main-nav ${mobileMenuOpen ? "active" : ""}`}>
              <ul className="menu">
                <li className="menu-item">
                  <NavLink to={routes.home.path} end onClick={() => setMobileMenuOpen(false)}>
                    <Icon name="Home" size={20} className="menu-icon" />
                    {routes.home.name}
                  </NavLink>
                </li>
               
                <li className="menu-item">
                  <NavLink to={routes.servicess.path} onClick={() => setMobileMenuOpen(false)}>
                    <Icon name="Services" size={20} className="menu-icon" />
                    {routes.servicess.name}
                  </NavLink>
                </li>
                
                <li className="get-quote-container ">
                  <NavLink className={" get-quote-button"} to={routes.contact.path} onClick={() => setMobileMenuOpen(false)}>
                    <Icon name="Contact" size={20} className="" />
                    {routes.contact.name}
                  </NavLink>
                </li>
               
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header