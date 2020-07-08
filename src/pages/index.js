import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Posts from "../components/Posts"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Map from "../components/Map"

const popupContentGatsby = `
<h4>Yucatán</h4>
<p>La península de Yucatán es una de las regiones más interesantes de toda América Latina. 
Es el hogar de algunos de los sitios arqueológicos más impresionantes del mundo, incluidas las antiguas ciudades mayas de 
<a href="https://tyucatan.com/posts/chichen-itza">Chichén Itzá</a>, 
<a href="https://tyucatan.com/posts/uxmal">Uxmal</a> y Cobá. </p>
<p>El <b>Estado de Yucatán</b> se encuentra en la parte superior de la península de Yucatán. Hasta el desarrollo de Cancún en la vecina Quintana Roo, era el motor económico de la península.</p>
<b>Superficie</b>: 43,379 km² <br>
<b>Población</b>: 2.097 millones (2015) <br>
`



const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data

  return (
    <Layout>
      <SEO title="Home" />
      <Hero showPerson />
      
      <Posts posts={posts} title="publicados recientemente" />
      <div style={{ width: "90%", margin: "auto" }}>
        <Map
          lat="20.618182"
          lng="-88.940782"
          zoom={5}
          mensaje={popupContentGatsby}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 5) {
      nodes {
        frontmatter {
          readTime
          title
          category
          date(formatString: "MMMM Do, YYYY")
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
        id
      }
    }
  }
`

export default IndexPage
