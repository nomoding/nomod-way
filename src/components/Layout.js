import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';

import '../styles/main.scss';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a');
}

const TemplateWrapper = ({ isAdditionalPage, children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
      </Helmet>

      <Header isAdditionalPage={isAdditionalPage} />
      <div className="main-layout">{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
