import React from 'react';
import { Link, graphql } from 'gatsby';
import { v4 } from 'uuid';
import kebabCase from 'lodash/kebabCase';

import Layout from '../components/Layout';
import CommonFirstScreenSection from '../components/CommonFirstScreenSection';
import Breadcrumbs from '../components/Breadcrumbs';
import ContentSection from '../components/ContentSection';

function valuesToArray(obj) {
  var result = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    }
  }
  return result;
}

const CategoryPage = ({ data }) => {
  const CategoryInfo = data.getCategoryInfo.frontmatter;
  const SubCategories = data.getSubCategories.edges;
  const Articles = data.getArticles.edges;
  const CategoryTitle = CategoryInfo.title;

  const NavData = {
    category: {
      title: CategoryInfo.title,
      link: false
    },
    article: false
  };

  return (
    <Layout seoTitle={CategoryTitle}>
      <CommonFirstScreenSection />
      <Breadcrumbs navData={NavData} />
      <ContentSectionWrapper categoryInfo={CategoryInfo} />
      <CategoryNavigation subCategories={SubCategories} articles={Articles} />
    </Layout>
  );
};

const ContentSectionWrapper = ({ categoryInfo: { title, description } }) => (
  <ContentSection>
    <h2>{title}</h2>
    <p>{description}</p>
  </ContentSection>
);

const CategoryNavigation = ({ subCategories, articles }) => {
  let SubCategoriesWithArticles = {};
  let SubCategoriesWithArticlesArray = [];

  // creating list of subcategories
  subCategories.forEach(subcategory => {
    const subCategoryTitle = subcategory.node.frontmatter.title;
    const subCategorySlug = kebabCase(subCategoryTitle);

    SubCategoriesWithArticles[subCategorySlug] = { title: subCategoryTitle, articles: [] };
  });

  // adding article to subcategory
  articles.forEach(article => {
    const articleDescription = article.node.html;
    const articleLink = article.node.fields.slug;
    const { title: articleTitle, articleCategory, articleSubCategory } = article.node.frontmatter;
    const categorySlug = kebabCase(articleCategory);
    const subCategorySlug = kebabCase(articleSubCategory);

    SubCategoriesWithArticles[subCategorySlug].articles.push({
      articleLink: `/${categorySlug}-${subCategorySlug}/${articleLink}`,
      articleTitle,
      articleDescription
    });
  });

  SubCategoriesWithArticlesArray = valuesToArray(SubCategoriesWithArticles);

  return (
    <section className="category-navigation-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="category-navigation-section__wrapper">
              {SubCategoriesWithArticlesArray.map(item => (
                <nav key={v4()}>
                  <h3>{item.title}</h3>

                  {item.articles.map(article => (
                    <li key={v4()}>
                      <Link to={article.articleLink}>
                        <h4>{article.articleTitle}</h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${article.articleDescription.slice(0, 245)}...`
                          }}
                        />
                      </Link>
                    </li>
                  ))}
                </nav>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;

export const pageQuery = graphql`
  query CategoryPage($id: String!, $categoryName: String!) {
    getCategoryInfo: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
      }
    }

    getSubCategories: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "subcategory-post" }
          articleCategory: { eq: $categoryName }
        }
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
        frontmatter: { templateKey: { eq: "article-post" }, articleCategory: { eq: $categoryName } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          html
          frontmatter {
            title
            articleCategory
            articleSubCategory
          }
        }
      }
    }
  }
`;
