const path = require('path')

exports.modifyWebpackConfig = ({ config, stage }, options) => {
  options.sourceMap = true

  const sassFiles = /\.s[ac]ss$/
  const sassModulesFiles = /\.module\.s[ac]ss$/
  const sassLoader = `sass?${JSON.stringify(options)}`

  switch (stage) {
    case 'develop': {
      config.removeLoader('sass')
      config.removeLoader('sassModules')

      config.loader('sass', {
        test: sassFiles,
        exclude: sassModulesFiles,
        loaders: ['style', 'css?sourceMap', sassLoader],
      })

      // config.loader('sassModules', {
      //   test: sassModulesFiles,
      //   loaders: [
      //     'style',
      //     `${cssModulesConfig(stage)}&sourceMap=true`,
      //     sassLoader,
      //   ],
      // })

      return config
    }
    default: {
      return config
    }
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlog(limit: 100) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // create blog pages
        const blogPostTemplate = path.resolve('src/templates/blog-post.js')
        result.data.allContentfulBlog.edges.forEach(edge => {
          createPage({
            path: `blog/${edge.node.slug}`,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
          resolve()
        })
      })
      // .then(() => {
      //   graphql(`
      //     {
      //       allContentfulCaseStudy(limit: 100) {
      //         edges {
      //           node {
      //             id
      //             slug
      //           }
      //         }
      //       }
      //     }
      //   `).then(result => {
      //     if (result.errors) {
      //       reject(result.errors)
      //     }
      //     // create case studies
      //     const caseStudyPostTemplate = path.resolve(
      //       'src/templates/case-study-post.js'
      //     )
      //     result.data.allContentfulCaseStudy.edges.forEach(edge => {
      //       createPage({
      //         path: `case-studies/${edge.node.slug}`,
      //         component: caseStudyPostTemplate,
      //         context: {
      //           slug: edge.node.slug,
      //         },
      //       })
      //     })
      //     resolve()
      //   })
      // })
      // .then(() => {
      //   graphql(`
      //     {
      //       allContentfulTechnology(limit: 100) {
      //         edges {
      //           node {
      //             id
      //             slug
      //             companyName
      //           }
      //         }
      //       }
      //     }
      //   `).then(result => {
      //     if (result.errors) {
      //       reject(result.errors)
      //     }
      //     // create technology posts
      //     const technologyPostTemplate = path.resolve(
      //       'src/templates/technology-post.js'
      //     )
      //     result.data.allContentfulTechnology.edges.forEach(edge => {
      //       createPage({
      //         path: `technology/${edge.node.slug}`,
      //         component: technologyPostTemplate,
      //         context: {
      //           slug: edge.node.slug,
      //           companyName: edge.node.companyName,
      //         },
      //       })
      //     })
      //     resolve()
      //   })
      // })
      // .then(() => {
      //   graphql(`
      //     {
      //       allContentfulExpertise(limit: 100) {
      //         edges {
      //           node {
      //             id
      //             slug
      //           }
      //         }
      //       }
      //     }
      //   `).then(result => {
      //     if (result.errors) {
      //       reject(result.errors)
      //     }
      //     // create expertise posts
      //     const expertisePostTemplate = path.resolve(
      //       'src/templates/expertise-post.js'
      //     )
      //     result.data.allContentfulExpertise.edges.forEach(edge => {
      //       createPage({
      //         path: `expertise/${edge.node.slug}`,
      //         component: expertisePostTemplate,
      //         context: {
      //           slug: edge.node.slug,
      //         },
      //       })
      //     })
      //     resolve()
      //   })
      // })
      // .then(() => {
      //   graphql(`
      //     {
      //       allContentfulPricing(limit: 100) {
      //         edges {
      //           node {
      //             id
      //             slug
      //           }
      //         }
      //       }
      //     }
      //   `).then(result => {
      //     if (result.errors) {
      //       reject(result.errors)
      //     }
      //     // create pricing posts
      //     const pricingPostTemplate = path.resolve(
      //       'src/templates/pricing-post.js'
      //     )
      //     result.data.allContentfulPricing.edges.forEach(edge => {
      //       createPage({
      //         path: `pricing/${edge.node.slug}`,
      //         component: pricingPostTemplate,
      //         context: {
      //           slug: edge.node.slug,
      //         },
      //       })
      //     })
      //     resolve()
      //   })
      // })
      // .then(() => {
      //   graphql(`
      //     {
      //       allContentfulCareer(limit: 100) {
      //         edges {
      //           node {
      //             id
      //             slug
      //           }
      //         }
      //       }
      //     }
      //   `).then(result => {
      //     if (result.errors) {
      //       reject(result.errors)
      //     }
      //     // create career posts
      //     const careerPostTemplate = path.resolve(
      //       'src/templates/career-post.js'
      //     )
      //     result.data.allContentfulCareer.edges.forEach(edge => {
      //       createPage({
      //         path: `career/${edge.node.slug}`,
      //         component: careerPostTemplate,
      //         context: {
      //           slug: edge.node.slug,
      //         },
      //       })
      //     })
      //     resolve()
      //   })
      // })
      // .then(() => {
      //   graphql(`
      //     {
      //       allContentfulWorkflow(limit: 100) {
      //         edges {
      //           node {
      //             id
      //             slug
      //           }
      //         }
      //       }
      //     }
      //   `).then(result => {
      //     if (result.errors) {
      //       reject(result.errors)
      //     }
      //     // create career posts
      //     const workflowPostTemplate = path.resolve(
      //       'src/templates/workflow-post.js'
      //     )
      //     result.data.allContentfulWorkflow.edges.forEach(edge => {
      //       createPage({
      //         path: `workflow/${edge.node.slug}`,
      //         component: workflowPostTemplate,
      //         context: {
      //           slug: edge.node.slug,
      //         },
      //       })
      //     })
      //     resolve()
      //   })
      // })
      // .then(() => {
      //   graphql(`
      //     {
      //       allContentfulVideo(limit: 100) {
      //         edges {
      //           node {
      //             id
      //             slug
      //           }
      //         }
      //       }
      //     }
      //   `).then(result => {
      //     if (result.errors) {
      //       reject(result.errors)
      //     }
      //     // create career posts
      //     const videoPostTemplate = path.resolve('src/templates/video-post.js')
      //     result.data.allContentfulVideo.edges.forEach(edge => {
      //       createPage({
      //         path: `video/${edge.node.slug}`,
      //         component: videoPostTemplate,
      //         context: {
      //           slug: edge.node.slug,
      //         },
      //       })
      //     })
      //     resolve()
      //   })
      // })
  })
}
