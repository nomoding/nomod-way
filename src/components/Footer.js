import React from 'react';
import { Link } from 'gatsby';

import LogoLight from '../img/logo-light.svg';

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="footer__logo col-12 col-lg-2 col-md-2">
          <Link to="/">
            <img src={LogoLight} alt="Nomod" />
          </Link>
        </div>

        <div className="footer__menu col-12 col-lg-10 col-md-10 d-flex align-items-center">
          <nav>
            <Link to="cookies-policy">Cookies</Link>
            <Link to="privacy-policy">Privacy</Link>
            <Link to="terms-of-use">Terms of Use</Link>
            <span>© {new Date().getFullYear()} Nomod</span>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
