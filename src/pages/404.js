import React from 'react';

import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';

import PeopleImage from '../img/nomod-people.svg';
import RocketImage from '../img/nomod-rocket.svg';

const PageNotFound = ({ data }) => (
  <Layout>
    <FirstScreenSection />
  </Layout>
);

const FirstScreenSection = () => (
  <section className="first-screen">
    <div className="first-screen__wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-7 col-lg-7 col-md-12 first-screen__text">
            <h1>404</h1>

            <h3>
            We couldn't find what you're looking for, but since you're here.. The Nomod Way is a guide to how we work at Nomod. It aspires to be a detailed, transparent, always working handbook on how we run Nomod, a fully distributed organisation
            </h3>
            
            <SearchForm />
          </div>

          <div className="col-12 col-xl-5 col-lg-5 col-md-12 first-screen__wrapper__images">
            <div className="first-screen__images">
              <img src={PeopleImage} alt="Nomod People" />
              <img src={RocketImage} alt="Nomod Rocket" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="first-screen__skew"></div>
  </section>
);


export default PageNotFound