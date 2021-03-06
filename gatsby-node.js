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

  result.data.allMdx.nodes.forEach(({ frontmatter: { slug, redirects } }) => {

    if (redirects) {
      
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

  /* ---------------------------------------
     ------------ Noticias  --------------
     --------------------------------------*/

  // Crea las páginas de Temas
  const resultTopics = await graphql(`
  {
    topics: allStrapiTopic(sort: {fields: articles___id, order: DESC}) {
      nodes {
        slug
        title
      }
    }
  }
  `)

  resultTopics.data.topics.nodes.forEach(item => {
    createPage({
      path: `/tema/${item.slug}`,
      component: path.resolve(`src/templates/noticias/topic-template.js`),
      context: {
        slug: item.slug,
        title: item.title,
      },
    })
  })

  // Crea páginas de Categorías
  const resultCategorias = await graphql(`
  {
    categorias: allStrapiCategories(sort: {fields: articles___id, order: DESC}) {
      nodes {
        slug
        title
        articles {
          id
        }
      }
    }
  }
  `)

  
  resultCategorias.data.categorias.nodes.forEach(catego => {
    createPage({
      path: `/categoria/${catego.slug}`,
      component: path.resolve(`src/templates/noticias/categoria-template.js`),
      context: {
        slug: catego.slug,
        title: catego.title,
      },
    })
  })

  // Crea páginas de Noticias
  const resultNoticias = await graphql(` 
  {
    articles:allStrapiArticle(sort: {order: DESC, fields: time}) {
      nodes {
        id
        strapiId
      }
    }
  }
  `)

  resultNoticias.data.articles.nodes.forEach(article => {
    createPage({
      path: `/article${article.strapiId}.html`,      
      component: path.resolve(`src/templates/noticias/article-template.js`),
      context: {
        strapiId: article.strapiId
      }
    })

    createPage({
      path: `/printarticle-${article.strapiId}.html`,      
      component: path.resolve(`src/templates/noticias/article-print-template.js`),
      context: {
        strapiId: article.strapiId
      }
    })
  })


}




