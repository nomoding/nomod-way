const path = require('path');
const kebabCase = require('lodash/kebabCase');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const createCategory = new Promise((resolve, reject) => {
    const CategoryPageTemplate = path.resolve(`./src/templates/category-page.js`);

    resolve(
      graphql(`
        {
          allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "category-post" } } }) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          result.errors.forEach(e => console.error(e.toString()));
          return reject(result.errors);
        }

        const data = result.data.allMarkdownRemark.edges;

        data.forEach(edge => {
          const id = edge.node.id;

          createPage({
            path: edge.node.fields.slug,
            component: path.resolve(CategoryPageTemplate),
            context: {
              id,
              categoryName: edge.node.frontmatter.title
            }
          });
        });
      })
    );
  });

  const createArticle = new Promise((resolve, reject) => {
    const ArticlePageTemplate = path.resolve(`./src/templates/article-page.js`);

    resolve(
      graphql(`
        {
          allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "article-post" } } }) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  articleCategory
                  articleSubCategory
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          result.errors.forEach(e => console.error(e.toString()));
          return reject(result.errors);
        }

        const data = result.data.allMarkdownRemark.edges;

        data.forEach(edge => {
          const id = edge.node.id;
          const { articleCategory, articleSubCategory } = edge.node.frontmatter;

          createPage({
            path: `${kebabCase(articleCategory)}-${kebabCase(articleSubCategory)}/${
              edge.node.fields.slug
            }`,
            component: path.resolve(ArticlePageTemplate),
            context: {
              id,
              articleCategory
            }
          });
        });
      })
    );
  });

  return Promise.all([createCategory, createArticle]);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: value.split('/')[2]
    });
  }
};
