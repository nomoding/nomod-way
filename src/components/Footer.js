import React from 'react';
import { Link } from 'gatsby';

import LogoDark from '../img/logo-dark.svg';

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="footer__logo col-12 col-lg-2 col-md-2">
          <Link to="/">
            <img src={LogoDark} alt="Nomod" />
          </Link>
        </div>

        <div className="footer__menu col-12 col-lg-10 col-md-10 d-flex align-items-center">
          <nav>
            {/* <a
              href="https://nomod-web.netlify.com/cookies-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookies
            </a>
            <a
              href="https://nomod-web.netlify.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
            <a
              href="https://nomod-web.netlify.com/terms-of-use"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Use
            </a> */}

            <span>© {new Date().getFullYear()} Nomod</span>
          </nav>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
