import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import CommonFirstScreenSection from '../components/CommonFirstScreenSection';
import Breadcrumbs from '../components/Breadcrumbs';
import ContentSection from '../components/ContentSection';

const ArticlePage = ({ data }) => {
  const ArticleInfo = data.getArticle;
  const CategoryInfo = data.getCategory;

  const NavData = {
    category: {
      title: CategoryInfo.frontmatter.title,
      link: CategoryInfo.fields.slug
    },
    article: {
      title: ArticleInfo.frontmatter.title
    }
  };

  return (
    <Layout>
      <CommonFirstScreenSection />
      <Breadcrumbs navData={NavData} />
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
  query ArticlePage($id: String!, $articleCategory: String!) {
    getArticle: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        articleCategory
        articleSubCategory
      }
    }

    getCategory: markdownRemark(frontmatter: { title: { eq: $articleCategory } }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
