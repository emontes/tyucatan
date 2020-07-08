const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
            redirects
          }
        }
      }
      categories: allMdx {
        distinct(field: frontmatter___category)
      }
    }
  `)

  // createRedirect({ fromPath: '/old-url', toPath: '/new-url', isPermanent: true });
  // createRedirect({ fromPath: '/url', toPath: '/zn-CH/url', Language: 'zn' });

  result.data.allMdx.nodes.forEach(({ frontmatter: { slug, redirects } }) => {

    if (redirects) {
      console.log(redirects)
      redirects.forEach( fromPath => {
        
        createRedirect({
          fromPath: fromPath,
          toPath: `/posts/${slug}`,
          redirectInBrowser: true,
          isPermanent: true
        })
      })
    }      

    createPage({
      path: `/posts/${slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug,
      },
    })
  })

  result.data.categories.distinct.forEach(category => {
    createPage({
      path: `/${category}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        category,
      },
    })
  })
}
