var proxy = require('http-proxy-middleware');

module.exports = {
  siteMetadata: {
    title: 'Nomod Way',
    description: 'How we work at Nomod',
    siteUrl: 'https://way.nomod.com' // important for robots-txt and sitemap
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/_data`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: '${__dirname}/static/img'
            }
          }
        ]
      }
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nomod Way`,
        short_name: `Nomod Way`,
        description:
          'How we work at Nomod',
        start_url: `/`,
        background_color: `#244feb`,
        theme_color: `#244feb`,
        display: `minimal-ui`,
        icon: `static/img/nomod-384x384.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `static/img/nomod-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `static/img/nomod-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },

          {
            src: `static/img/nomod-180x180.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `html`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            articleCategory: node => node.frontmatter.articleCategory,
            articleSubCategory: node => node.frontmatter.articleSubCategory,
            title: node => node.frontmatter.title,
            path: node => node.frontmatter.path,
            html: node => node.internal.content,
            slug: node => node.fields.slug
          }
        },
        // Optional filter to limit indexed nodes
        filter: (node, getNode) => node.frontmatter.templateKey === 'article-post'
      }
    },
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
};
