import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { graphql } from "gatsby"
import Noticias from "../components/Noticias"

const Categoria = ({ data, pageContext }) => {
  const {
    allStrapiArticle: { nodes: noticias },
  } = data

  return (
    <Layout>
      <Hero />
      <Noticias noticias={noticias} title={`Noticias de ${pageContext.title}`} />
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String){
    allStrapiArticle(
      
      sort: { order: DESC, fields: time }
      limit: 20
      filter: { category: { slug: { eq: $slug } } }
    ) {
      totalCount
      nodes {
        strapiId
        id
        title
        hometext
        tiempoPlano: time
        time(locale: "ES", formatString: "MMMM DD, YYYY")
        category {
          slug
          title
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

        topic {
          slug
          title
          image {
            childImageSharp {
              fluid {
                #srcSetWebp
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
export default Categoria
