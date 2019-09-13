import React from 'react';
import { Link } from 'gatsby';

const AdditionalMenu = () => (
  <div className="additional-page__menu">
    <nav>
      <li>
        <Link to="cookies-policy" activeClassName="active">
          Cookies Policy
        </Link>
      </li>
      <li>
        <Link to="privacy-policy" activeClassName="active">
          Privacy Policy
        </Link>
      </li>
      <li>
        <Link to="terms-of-use" activeClassName="active">
          Terms of Use
        </Link>
      </li>
    </nav>
  </div>
);

export default AdditionalMenu;
