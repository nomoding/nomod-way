import React from 'react';
import { Link } from 'gatsby';

const Breadcrumbs = () => (
  <section className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav>
            <li>
              <Link to="/">Handbook</Link>
            </li>
            <li>
              <Link to="category">Communication & Meetings </Link>
            </li>
            <li>People Operations</li>
          </nav>
        </div>
      </div>
    </div>
  </section>
);

export default Breadcrumbs;
