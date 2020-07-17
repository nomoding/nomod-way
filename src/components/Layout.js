import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';

import useSiteMetadata from './SiteMetadata';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/main.scss';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a');
}

const TemplateWrapper = ({ seoTitle, isAdditionalPage, children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{`${seoTitle || description} | ${title}`}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={`${title} | ${seoTitle}`} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.png`} />
      </Helmet>

      <Header isAdditionalPage={isAdditionalPage} />
      <div className="main-layout">
        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TemplateWrapper;
