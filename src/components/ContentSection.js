import React from 'react';

const ContentSection = ({ children }) => (
  <section className="content-section">
    <div className="container">
      <div className="row">
        <div className="col-12">{children}</div>
      </div>
    </div>
  </section>
);

export default ContentSection;
