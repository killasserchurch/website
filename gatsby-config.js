require('dotenv').config()
const config = require('./src/data/SiteConfig')
const languages = require('./src/data/languages')

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: 'Church Services | Killasser Parish',
    author: 'Kingluddite',
    description:
      'The parish takes its name Killasser from Cill Lasrach – the church of Lasair.',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID
          ? process.env.CONTENTFUL_SPACE_ID
          : '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
          ? process.env.CONTENTFUL_ACCESS_TOKEN
          : '',
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlog } }) => {
              return allContentfulBlog.edges.map(edge => {
                return Object.assign({}, edge.node.body.childMarkdownRemark, {
                  description: edge.node.metaDescription,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                  custom_elements: [{ 'content:encoded': edge.node.body }],
                })
              })
            },
            query: `
            {
              allContentfulBlog(
                limit: 1000
              ) {
                edges {
                  node {
                    slug
                    body {
                      childMarkdownRemark {
                        excerpt
                        html
                      }
                    }
                  }
                }
              }
            }
          `,
            output: '/rss.xml',
          },
        ],
      },
    },

    // options: {
    //         plugins: [
    //           {
    //             resolve: "gatsby-remark-images",
    //             options: {
    //               maxWidth: 1200
    //             }
    //           },
    //           {
    //             resolve: "gatsby-remark-responsive-iframe"
    //           },
    //           "gatsby-remark-prismjs",
    //           "gatsby-remark-copy-linked-files",
    //           "gatsby-remark-autolink-headers"
    //         ]
    //       }
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: config.siteGATrackingID,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-tagmanager`,
    //   options: {
    //     id: config.googleTagManagerId,

    //     // Include GTM in development.
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: false,

    //     // Specify optional GTM environment details.
    //     // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING',
    //     // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME',
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato:400,700i`, `Open Sans:300,800i`],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-remove-trailing-slashes`,
  ],
}
