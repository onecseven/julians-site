import React, { useState } from "react"
import "./navbar.scss"

export const Navbar = () => {
  const [isActive, toggleActive] = useState(false)
  let hamburgerClick = () => {
      toggleActive(!isActive)
  }
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="nav-logo">
          Julian
        </a>
        <ul className={`nav-menu ${isActive ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={hamburgerClick}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={hamburgerClick}>
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={hamburgerClick}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={hamburgerClick}>
              Contact
            </a>
          </li>
        </ul>
        <div className={`hamburger ${isActive ? "active" : ""}`} onClick={hamburgerClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  )
}
