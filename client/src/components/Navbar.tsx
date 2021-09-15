import React, { useState } from "react"
import { Link } from "@reach/router";
import "./navbar.scss"

export const Navbar = () => {
  const [isActive, toggleActive] = useState(false)
  let hamburgerClick = () => {
      toggleActive(!isActive)
  }
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          Julian
        </Link>
        <ul className={`nav-menu ${isActive ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="services" className="nav-link" onClick={hamburgerClick}>
              Book an appointment
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link href="#" className="nav-link" onClick={hamburgerClick}>
              Blog
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="about" className="nav-link" onClick={hamburgerClick}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" className="nav-link" onClick={hamburgerClick}>
              Contact
            </Link>
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
