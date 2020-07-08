import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    piramide: file(relativePath: { eq: "piramide.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = ({ showPerson }) => {
  const { piramide } = useStaticQuery(query)
  return (
    <header className="hero">
      {showPerson && (
        <Image fluid={piramide.childImageSharp.fluid} className="hero-piramide" />
      )}
    </header>
  )
}

export default Hero
