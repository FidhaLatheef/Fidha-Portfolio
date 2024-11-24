import React, { useState } from 'react'
import "./header.css"

function Header() {
  const [Toggle, showMenu] = useState(false)
  return (
    <div className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">FIDHA</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item active-link">
              <a href="#home" className="nav__link">
                <span className="nav__heads">Home</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <span className="nav__heads">About</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <span className="nav__heads">Skills</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <span className="nav__heads">Services</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <span className="nav__heads">Portfolio</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <span className="nav__heads">Contact</span>
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}>
          </i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </div>
  );
}


export default Header