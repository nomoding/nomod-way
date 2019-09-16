import React from 'react';
import { Link } from 'gatsby';

const Breadcrumbs = ({ navData }) => (
  <section className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav>
            <li>
              <Link to="/">Handbook</Link>
            </li>
            <li>
              {navData.category.link ? (
                <Link to={navData.category.link}>{navData.category.title}</Link>
              ) : (
                navData.category.title
              )}
            </li>
            {navData.article ? <li>{navData.article.title}</li> : null}
          </nav>
        </div>
      </div>
    </div>
  </section>
);

export default Breadcrumbs;
