import React, { useState, useEffect } from 'react'
import "./header.css"
import { UilMoon, UilSun } from '@iconscout/react-unicons';

function Header() {
  const [Toggle, showMenu] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">FIDHA</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>

          <ul className="nav__list grid">

            {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
              <li className="nav__item" key={index}>
                <a href={`#${item.toLocaleLowerCase()}`} className="nav__link">
                  <span className="nav__heads">{item}</span>
                </a>
              </li>
            ))}

            {!isMobile && (
              <li className="nav__item nav__theme-toggle">
                <span onClick={toggleTheme} className="theme-toggle">
                  {isDarkMode ? <UilSun size="24" color="var(--title-color)" /> : <UilMoon size="24" color="var(--title-color)" />}
                </span>
              </li>
            )}
          </ul>

          {isMobile && (
            <div className="nav__bottom">
              <span onClick={toggleTheme} className="theme-toggle">
                {isDarkMode ? <UilSun size="24" color="var(--title-color)" /> : <UilMoon size="24" color="var(--title-color)" />}
              </span>
              <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>
          )}
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </div>
  );
}


export default Header