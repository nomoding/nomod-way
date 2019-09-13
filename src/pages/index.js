import React from 'react';
import { v4 } from 'uuid';
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from '../components/Layout';
import SubscriptionForm from '../components/SubscriptionForm';

import RocketImage from '../img/first-screen/rocket.svg';
import LuggageImage from '../img/first-screen/luggage.svg';

const IndexPage = () => (
  <Layout>
    <FirstScreenSection />
    <TopicsSection />
    <ComingSoonSection />
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

            <form className="search-form">
              {/* <img className="search-form__icon" src="" alt=""/> */}
              <input type="text" placeholder="Search topics" />
            </form>
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

const Card = ({ title, description }) => (
  <div className="col-12 col-xl-4 col-lg-6 col-md-6">
    <div className="card">
      <div className="card__image"></div>
      <div className="card__title">{title}</div>
      <div className="card__description">{description}</div>
    </div>
  </div>
);

const TopicsSection = () => (
  <div className="topics-section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="topics-section__title">Search by topic</div>
        </div>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(card => (
          <Card
            key={v4()}
            title="Welcome"
            description="Cras facilisis lacus congue libero viverra, in eleifend quam accumsan. Nunc eu consectetur magna."
          />
        ))}
      </div>
    </div>
  </div>
);

const ComingSoonSection = () => (
  <section className="coming-soon-section">
    <div className="coming-soon-section__wrapper">
      <div className="container">
        <ScrollAnimation animateIn="fadeInUp">
          <div className="row">
            <div className="col-12">
              <h4 className="section-title">Coming Soon!</h4>
              <p className="section-description">
                Cras facilisis lacus congue libero viverra, in eleifend quam accumsan. Nunc eu
                consectetur magna.
              </p>

              <SubscriptionForm />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  </section>
);

export default IndexPage;
