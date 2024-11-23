import React from 'react'
import "../css/header.css"

function Header() {
    return (
      <div className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">FIDHA</a>
  
          <div className="nav__menu">
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
  
            <i className="uil uil-times nav__close"></i>
          </div>
          <div className="nav__toggle">
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </div>
    );
  }
  

export default Header