import React from 'react'
import "../css/header.css"

function Header() {
  return (
  <div className="header">
    <nav className="nav container">
        <a href="index.html" className="nav__logo">FIDHA FATHIMA</a>

        <div className="nav__menu">
            <ul className="nav__list grid">
                <li className="nav__item">
                    <a href="index.html" className="nav__link">
                        <i className="uil uil-estate nav__icon">Home</i>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="index.html" className="nav__link">
                        <i className="uil uil-nav__icon"></i>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="index.html" className="nav__link">
                        <i className="uil uil-nav__icon"></i>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="index.html" className="nav__link">
                        <i className="uil uil-nav__icon"></i>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="index.html" className="nav__link">
                        <i className="uil uil-nav__icon"></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  </div>
  )
}

export default Header