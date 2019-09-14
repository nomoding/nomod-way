import React from 'react';
import { Link } from 'gatsby';
import { v4 } from 'uuid';

import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';

import RocketImage from '../img/first-screen/rocket.svg';
import LuggageImage from '../img/first-screen/luggage.svg';

const IndexPage = () => (
  <Layout>
    <FirstScreenSection />
    <TopicsSection />
  </Layout>
);

const FirstScreenSection = () => (
  <section className="first-screen">
    <div className="first-screen__wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-7 col-lg-7 col-md-12 first-screen__text">
            <h1>Handbook</h1>

            <h3>
              A guide on working at Nomod. Vivamus eget dui viverra, gravida risus ut, dictum augue.
              Proin varius erat eget libero dignissim feugiat. Nam hendrerit, quam.
            </h3>

            <SearchForm />
          </div>

          <div className="col-12 col-xl-5 col-lg-5 col-md-12 first-screen__wrapper__images">
            <div className="first-screen__images">
              <img src={RocketImage} alt="Rocket" />
              <img src={LuggageImage} alt="Luggage" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="first-screen__skew"></div>
  </section>
);

const Card = ({ index, title, description }) => (
  <div className="col-12 col-xl-4 col-lg-6 col-md-6">
    <Link to="category">
      <div className="card">
        <div className="card__image"></div>
        <div className="card__title">{title}</div>
        <div className="card__description">{description}</div>
      </div>
    </Link>
  </div>
);

const TopicsSection = () => (
  <div className="topics-section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="topics-section__title">Search by topic</div>
        </div>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card, index) => (
          <Card
            key={v4()}
            index={index}
            title="Welcome"
            description="Cras facilisis lacus congue libero viverra, in eleifend quam accumsan. Nunc eu consectetur magna."
          />
        ))}
      </div>
    </div>
  </div>
);

export default IndexPage;
