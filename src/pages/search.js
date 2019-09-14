import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import CommonFirstScreenSection from '../components/CommonFirstScreenSection';

const SearchPage = () => (
  <Layout>
    <CommonFirstScreenSection />
    <ContentSectionWrapper />
  </Layout>
);

const ContentSectionWrapper = () => (
  <section className="search-page">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="search-page__wrapper">
            <h2 className="search-page__title">
              310 results for <strong>meetings</strong>
            </h2>

            <ul className="search-page__results">
              <li>
                <Link to="article">
                  <h3>Live Streaming</h3>
                  <p>
                    If you only feel comfortable speaking with one team member, you can ping an
                    individual member of the People Group team, as listed on our Team page.
                  </p>
                </Link>
              </li>
              <li>
                <Link to="article">
                  <h3>Live Streaming</h3>
                  <p>
                    If you only feel comfortable speaking with one team member, you can ping an
                    individual member of the People Group team, as listed on our Team page.
                  </p>
                </Link>
              </li>
              <li>
                <Link to="article">
                  <h3>Live Streaming</h3>
                  <p>
                    If you only feel comfortable speaking with one team member, you can ping an
                    individual member of the People Group team, as listed on our Team page.
                  </p>
                </Link>
              </li>
              <li>
                <Link to="article">
                  <h3>Live Streaming</h3>
                  <p>
                    If you only feel comfortable speaking with one team member, you can ping an
                    individual member of the People Group team, as listed on our Team page.
                  </p>
                </Link>
              </li>
              <li>
                <Link to="article">
                  <h3>Live Streaming</h3>
                  <p>
                    If you only feel comfortable speaking with one team member, you can ping an
                    individual member of the People Group team, as listed on our Team page.
                  </p>
                </Link>
              </li>
            </ul>

            <div className="search-page__pagination">
              <nav>
                <Link to="search" className="active">
                  1
                </Link>
                <Link to="search">2</Link>
                <Link to="search">3</Link>
                <Link to="search">4</Link>
                <Link to="search">5</Link>
                <span>...</span>
                <Link to="search">32</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SearchPage;
