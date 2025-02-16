import React from 'react'
import "./footer.css"

function Footer() {
  return (
   <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Fidha</h1>

        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>
            <li>
                <a href="#skills" className="footer__link">Skills</a>
            </li>
            <li>
                <a href="#testimonials" className="footer__link">Testimonial</a>
            </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.instagram.com/_f1.dha._/" className="footer__social-link" target="_blank" rel="noreferrer">
                <i class="bx bxl-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/fidha-fathima-44809025a/" className="footer__social-link" target="_blank" rel="noreferrer">
                <i class="bx bxl-linkedin"></i>
            </a>
            <a href="https://x.com/FidhaLatheef" className="footer__social-link" target="_blank" rel="noreferrer">
                <i class="bx bxl-twitter"></i>
            </a>
        </div>

        <span className='footer__copy'>&#169; Fidhafathima. All rights reserved.</span>
    </div>
   </footer>
  )
}

export default Footer
