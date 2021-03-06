import React from "react"
import SocialLinks from "../../constants/socialLinks"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Title from "./Title"
import styled from "styled-components"
const query = graphql`
  {
    file(relativePath: { eq: "banner-about.jpeg" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const About = (props) => {
  const data = useStaticQuery(query)
  return (
    <Wrapper>
      <Title title={props.title || "TYucatán"} />
      <Image fixed={data.file.childImageSharp.fixed} className="img" />
      <p>
        {
          props.description ||
          <span dangerouslySetInnerHTML={{__html: 
          "La T es por turista, este es un blog de turismo en Yucatán desarrollado por <a href='https://turista.com.mx'>Turista México</a>"}} 
          />
          
        }
        
      </p>
      <SocialLinks styleClass="banner-icons"></SocialLinks>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
  }
`
export default About
