import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import CommonFirstScreenSection from '../components/CommonFirstScreenSection';
import Breadcrumbs from '../components/Breadcrumbs';
import ContentSection from '../components/ContentSection';

const ArticlePage = ({ data }) => {
  const ArticleInfo = data.getArticle;
  return (
    <Layout>
      <CommonFirstScreenSection />
      <Breadcrumbs />
      <ContentSectionWrapper articleInfo={ArticleInfo} />
    </Layout>
  );
};

const ContentSectionWrapper = ({
  articleInfo: {
    html,
    frontmatter: { title }
  }
}) => (
  <div className="article-page">
    <ContentSection>
      <h2>{title}</h2>

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ContentSection>
  </div>
);

export default ArticlePage;

export const pageQuery = graphql`
  query ArticlePage($id: String!) {
    getArticle: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        articleCategory
        articleSubCategory
      }
    }
  }
`;
