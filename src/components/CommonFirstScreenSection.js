import React from 'react';

import SearchForm from './SearchForm';

const CommonFirstScreenSection = () => (
  <section className="common-first-screen-section">
    <div className="common-first-screen-section__wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 common-first-screen-section__text">
            <h1>Handbook</h1>

            <SearchForm />
          </div>
        </div>
      </div>
    </div>

    <div className="common-first-screen-section__skew" />
  </section>
);

export default CommonFirstScreenSection;
