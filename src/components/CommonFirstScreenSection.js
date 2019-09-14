import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import SearchForm from './SearchForm';

const CommonFirstScreenSection = () => (
  <section className="common-first-screen-section">
    <div className="common-first-screen-section__wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 common-first-screen-section__text">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce>
              <h1>Handbook</h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft" animateOnce delay={150}>
              <SearchForm />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>

    <div className="common-first-screen-section__skew" />
  </section>
);

export default CommonFirstScreenSection;
