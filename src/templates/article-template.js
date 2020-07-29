import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import styled from "styled-components"
import SEO from "../components/SEO"
import Banner from "../components/Banner/IndexNoticias" 
import { graphql } from "gatsby"
import ReactMarkdown from 'react-markdown'

const NoticiaTemplate = ({ data }) => {
  const { title, tiempoPlano, time, category, hometext, bodytext } = data.article
  const fecha = new Date(tiempoPlano)
  const anyo = fecha.getFullYear();
  return (
    <Layout>
      <SEO title={title} description={hometext} />
      <Hero />
      <Wrapper>
        <article>
        <div className="post-info">
            {category.title && <span style={{background: category.color}}>{category.title}</span>}
            
            <h2>{title}</h2>
            <p>{time}</p>
            <div className="underline"></div>
          </div>

          {
          (anyo < 2018) 
                ? 
                <>
                <div dangerouslySetInnerHTML={{__html: hometext}} />
                <div dangerouslySetInnerHTML={{__html: bodytext}} />
                </>
                :
                <>
                <ReactMarkdown source={hometext} />
                <ReactMarkdown source={bodytext} />
                </>
                 
            }
          
          
          
        </article>
        <article>
          <Banner />
        </article>
      </Wrapper>
    </Layout>
  )
}
export const query = graphql`
  query Article($strapiId: Int) {
    article: strapiArticle(strapiId: { eq: $strapiId }) {
      tiempoPlano:time
      time(locale: "ES", formatString: "ddd MMMM DD, YYYY")
      title
      category {
        slug
        title
        color
      }
      hometext
      bodytext
    }
  }
`

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-grey-5);
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr 200px;
      column-gap: 4rem;
    }
  }
`

export default NoticiaTemplate
