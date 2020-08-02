import React from "react"
import Layout from "../../components/Layout"
import Hero from "../../components/Hero"
import styled from "styled-components"
import SEO from "../../components/SEO"
import Banner from "../../components/Banner/IndexNoticias"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import { FaRegClock, FaPrint } from "react-icons/fa"
import { Link } from "gatsby"
import Image from "gatsby-image"

const NoticiaTemplate = ({ data }) => {
  const {
    title,
    tiempoPlano,
    time,
    category,
    hometext,
    bodytext,
    imagen,
  } = data.article
  
  const fecha = new Date(tiempoPlano)
  const anyo = fecha.getFullYear()
  return (
    <Layout>
      <SEO title={title} description={hometext} />
      <Hero />
      <Wrapper>
        <article>
          <div className="post-info">
            {category.title && (
              <span className="category" style={{ background: category.color }}>
                {category.title}
              </span>
            )}

            <h1>{title}</h1>

            <footer>
              <span className="date">
                <FaRegClock className="icon"></FaRegClock>
                {time}
              </span>
              <span className="date">
                <Link
                  to={`/printarticle-${data.article.strapiId}.html`}
                  title="Versión para Imprimir"
                >
                  <FaPrint className="icon" />
                </Link>
              </span>
            </footer>

            <div className="underline"></div>
          </div>

          {anyo < 2018 ? (
            <>
              <div dangerouslySetInnerHTML={{ __html: hometext }} />
              {imagen[0] && (
                <Image
                  className="image"
                  fluid={imagen[0].formats.medium.childImageSharp.fluid}
                  alt={imagen[0].alternativeText}
                />
              )}
              <p dangerouslySetInnerHTML={{ __html: bodytext }} />
            </>
          ) : (
            <>
              <ReactMarkdown source={hometext} />
              {imagen[0] && (
                <Image
                  className="image"
                  fluid={imagen[0].formats.medium.childImageSharp.fluid}
                  alt={imagen[0].alternativeText}
                />
              )}
              <ReactMarkdown source={bodytext} />
            </>
          )}
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
      strapiId
      tiempoPlano: time
      time(locale: "ES", formatString: "ddd MMMM DD, YYYY")
      title
      category {
        slug
        title
        color
      }
      hometext
      bodytext
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
`

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    .category {
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h1 {
      margin: 1.25rem 0;
      font-size: 1.9rem;
      font-weight: 400;
    }

    

    footer {
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--clr-grey-5);

      & .date {
        display: flex;
        align-items: center;
        & .icon {
          color: var(--clr-primary-5);
          margin-right: 0.5rem;
        }
      }
    }
  }

  .image {
      border-radius: var(--radius);
      margin-bottom: 1rem;
    }

  p {
    color: var(--clr-grey-5);
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--clr-grey-9);
    margin: 1rem auto;
    margin-bottom: 1rem;
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
