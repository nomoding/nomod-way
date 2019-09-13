import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import SubscriptionForm from '../components/SubscriptionForm';

const ComingSoonSection = () => (
  <section className="coming-soon-section">
    <div className="coming-soon-section__wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ScrollAnimation animateIn="fadeInUp">
              <h4 className="section-title">Coming Soon!</h4>
              <p className="section-description">
                Cras facilisis lacus congue libero viverra, in eleifend quam accumsan. Nunc eu
                consectetur magna.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" delay={150}>
              <SubscriptionForm />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ComingSoonSection;
