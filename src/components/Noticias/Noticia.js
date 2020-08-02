import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import Image from "gatsby-image"
import { FaRegClock } from "react-icons/fa"

const Noticia = ({
  title,
  hometext,
  time,
  tiempoPlano,
  strapiId,
  category,
  topic,
  imagen,
}) => {
  const fecha = new Date(tiempoPlano)
  const anyo = fecha.getFullYear()

  return (
    <Wrapper>
      <Link to={`/article${strapiId}.html`}>
        <h3>{title}</h3>
        {
          imagen[0] 
          ?
          <>
            {
              imagen[0].formats &&
                <Image
                  className="image"
                  fluid={imagen[0].formats.medium.childImageSharp.fluid}
                  alt={imagen[0].alternativeText}
                />
            }
          </>
          :
          topic.image && (
          <Image
            className="image"
            fluid={topic.image.childImageSharp.fluid}
            alt={topic.title}
            title={topic.title}
          />
          )
        }
        {anyo < 2018 ? (
          <div dangerouslySetInnerHTML={{ __html: hometext }} />
        ) : (
          <ReactMarkdown source={hometext} />
        )}

        <footer>
          <span className="date">
            <FaRegClock className="icon"></FaRegClock>
            {time}
          </span>
          <span className="category">{category.title}</span>
        </footer>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  position: relative;
  border: 1px solid var(--clr-grey-9);
  margin-bottom: 1.5rem;
  padding: 3rem;
  box-shadow: var(--light-shadow);
  background-color: var(--clr-grey-10);
  border-radius: var(--radius);
  transition: var(--transition);
  h3 {
    font-size: 1.3rem;
  }

  :hover {
    background-color: var(--clr-white);
    box-shadow: var(--dark-shadow);
  }

  .image {
    width: 116px;
    border-radius: var(--radius);
    float: left;
    margin-right: 1rem;
  }

  .category {
    background: var(--clr-grey-9);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
  }

  footer {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid var(--clr-grey-9);
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
`

export default Noticia
