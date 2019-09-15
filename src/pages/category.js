import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import CommonFirstScreenSection from '../components/CommonFirstScreenSection';
import Breadcrumbs from '../components/Breadcrumbs';
import ContentSection from '../components/ContentSection';

const CategoryPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <CommonFirstScreenSection />
      <Breadcrumbs />
      <ContentSectionWrapper />
      <CategoryNavigation />
    </Layout>
  );
};

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
              <Link to="article">People Operations</Link>
            </li>
            <li>
              <Link to="article">Communication</Link>
            </li>
            <li>
              <Link to="article">Live Streaming</Link>
            </li>
            <li>
              <Link to="article">Inclusion & Diversity</Link>
            </li>
          </nav>

          <nav>
            <h3>Leadership</h3>
            <li>
              <Link to="article">Gender and Sequal-orientation Identity Definitions and FAQ</Link>
            </li>
            <li>
              <Link to="article">Unconscious bias</Link>
            </li>
            <li>
              <Link to="article">Ally resources</Link>
            </li>
            <li>
              <Link to="article">Code of Conduct</Link>
            </li>
            <li>
              <Link to="article">Anti-Harassment Policy</Link>
            </li>
            <li>
              <Link to="article">Hiring</Link>
            </li>
            <li>
              <Link to="article">Greenhouse</Link>
            </li>
          </nav>
        </div>
      </div>
    </div>
  </section>
);

export default CategoryPage;

export const pageQuery = graphql`
  query CategoryPage {
    getSubCategories: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "subcategory-post" }, articleCategory: { eq: "Culture" } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }

    getArticles: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "article-post" }, articleCategory: { eq: "Culture" } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            articleSubCategory
            articleCategory
          }
        }
      }
    }
  }
`;
