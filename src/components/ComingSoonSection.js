import React from 'react';

import SubscriptionForm from '../components/SubscriptionForm';

const ComingSoonSection = () => (
  <section className="coming-soon-section">
    <div className="coming-soon-section__wrapper">
      <div className="container">
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
      </div>
    </div>
  </section>
);

export default ComingSoonSection;
