import React, { useState } from "react"
import { Link } from "@reach/router"
import "./navbar.scss"
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../store/hooks"

const nonLoggedInElement = (hamburgerClick) => (
  <>
    <li className="nav-item">
      <Link to="login" className="nav-link" onClick={hamburgerClick}>
        Login
      </Link>
    </li>
    <li className="nav-item">
      <Link to="register" className="nav-link" onClick={hamburgerClick}>
        Register
      </Link>
    </li>
  </>
)

const profile = (hamburgerClick) => (
  <li className="nav-item">
    <Link to="profile" className="nav-link" onClick={hamburgerClick}>
      Profile
    </Link>
  </li>
)

export const Navbar = () => {
  const [isActive, toggleActive] = useState(false)
  let hamburgerClick = () => {
    toggleActive(!isActive)
  }
  const { isLoggedIn, name } = useSelector((state) => state.login)

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          radfairyflows
        </Link>
        <ul className={`nav-menu ${isActive ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="services" className="nav-link" onClick={hamburgerClick}>
              Book an appointment
            </Link>
          </li>
          {isLoggedIn ? profile(hamburgerClick) : null}
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
          {isLoggedIn ? (
            <>
              <li className="nav-item"></li>
              <li className="nav-item-logged">{"Welcome Back, " + name}</li>
            </>
          ) : (
            nonLoggedInElement(hamburgerClick)
          )}
        </ul>
        <div
          className={`hamburger ${isActive ? "active" : ""}`}
          onClick={hamburgerClick}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  )
}
