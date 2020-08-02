import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { graphql } from "gatsby"
import Noticias from "../components/Noticias"

const NoticiasPage = ( {data} ) => {
  const {
    allStrapiArticle: { nodes: noticias },
  } = data
  
  return (
    <Layout>
      <Hero />
      <Noticias noticias={noticias} title="Últimas Noticias"/>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiArticle(sort: {order: DESC, fields: time}, limit: 30) {
      totalCount
      nodes {
        strapiId
        id
        title
        hometext
        tiempoPlano:time
        time(locale: "ES", formatString: "MMMM DD, YYYY")
        category {
          slug
          title
        }
        
        topic {
          slug
          title
          image {
            childImageSharp {
              fluid {
                #srcSet
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        imagen {
          alternativeText
          formats {
            medium {
              childImageSharp {
                fluid {
                  #srcSet
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default NoticiasPage
