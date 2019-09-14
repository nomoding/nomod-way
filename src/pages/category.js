import React from 'react';

import Layout from '../components/Layout';
import CommonFirstScreenSection from '../components/CommonFirstScreenSection';
import Breadcrumbs from '../components/Breadcrumbs';
import ContentSection from '../components/ContentSection';

const CategoryPage = () => (
  <Layout>
    <CommonFirstScreenSection />
    <Breadcrumbs />
    <ContentSectionWrapper />
    <CategoryNavigation />
  </Layout>
);

const ContentSectionWrapper = () => (
  <ContentSection>
    <h2>Communication & Meetings</h2>
    <p>
      Cras facilisis lacus congue libero viverra, in eleifend quam accumsan. Nunc eu consectetur
      magna.
    </p>
  </ContentSection>
);

const CategoryNavigation = () => (
  <section className="category-navigation-section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav>
            <h3>Internal Meetings</h3>
            <li>
              <a href="http://">People Operations</a>
            </li>
            <li>
              <a href="http://">Communication</a>
            </li>
            <li>
              <a href="http://">Live Streaming</a>
            </li>
            <li>
              <a href="http://">Inclusion & Diversity</a>
            </li>
          </nav>

          <nav>
            <h3>Leadership</h3>
            <li>
              <a href="http://">Gender and Sequal-orientation Identity Definitions and FAQ</a>
            </li>
            <li>
              <a href="http://">Unconscious bias</a>
            </li>
            <li>
              <a href="http://">Ally resources</a>
            </li>
            <li>
              <a href="http://">Code of Conduct</a>
            </li>
            <li>
              <a href="http://">Anti-Harassment Policy</a>
            </li>
            <li>
              <a href="http://">Hiring</a>
            </li>
            <li>
              <a href="http://">Greenhouse</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
  </section>
);

export default CategoryPage;
