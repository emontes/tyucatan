import React from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"
import Imagen from "../../components/Noticias/Imagen"


const NoticiaTemplate = ({ data }) => {
  const {
    strapiId,
    title,
    tiempoPlano,
    time,
    category,
    hometext,
    bodytext,
    imagen,
  } = data.article
  const ligaRetorno = `https://tyucatan.com/article${strapiId}.html`

  const fecha = new Date(tiempoPlano)
  const anyo = fecha.getFullYear()

  return (
    <Wrapper>
      <article>
        <div className="post-info">
          {category.title && (
            <span style={{ background: category.color }}>{category.title}</span>
          )}

          <h2>{title}</h2>
          <p>{time}</p>
          <div className="underline"></div>
        </div>

        {anyo < 2018 ? (
          <>
            <div dangerouslySetInnerHTML={{ __html: hometext }} />
            <Imagen imagen={imagen}/>
            <div dangerouslySetInnerHTML={{ __html: bodytext }} />
          </>
        ) : (
          <>
            <ReactMarkdown source={hometext} />
            <Imagen imagen={imagen}/>
            <ReactMarkdown source={bodytext} />
          </>
        )}
      </article>
      <br />
      <p>
        El Artículo viene de:&nbsp;
        <a href={ligaRetorno}>{ligaRetorno}</a>
      </p>
    </Wrapper>
  )
}

export const query = graphql`
  query ArticlePrint($strapiId: Int) {
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
          large {
            childImageSharp {
              fluid {
                #srcSet
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          medium {
            childImageSharp {
              fluid {
                #srcSet
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          small {
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
`

export default NoticiaTemplate
