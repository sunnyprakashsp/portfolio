import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <div className="footer__title">SP</div>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#project" className="footer__link">project</a>
                </li>
            </ul>

            <div className="footer__social">
              <a href="https://www.instagram.com" className="home__social-icon" target="_black">
                 <i class="uil uil-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" className="home__social-icon" target="_black">
                 <i class="uil uil-linkedin"></i>
              </a>
              <a href="https://www.github.com" className="home__social-icon" target="_black">
                 <i class="uil uil-github-alt"></i>
              </a>
            </div>
            <span className="footer__copy">
                &#169; Crypticalcoder. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer
