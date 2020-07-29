import React from "react"
import styled from "styled-components"

import { graphql } from "gatsby"
const NoticiaTemplate = ({ data }) => {
  const { title, created_at, category, hometext, bodytext } = data.article
  const ligaRetorno= `https://tyucatan.com/article${data.article.strapiId}.html`
  return (
    <Wrapper>
      <article>
        <div className="post-info">
          {category.title && (
            <span style={{ background: category.color }}>{category.title}</span>
          )}

          <h2>{title}</h2>
          <p>{created_at}</p>
          <div className="underline"></div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: hometext }} />

        <div dangerouslySetInnerHTML={{ __html: bodytext }} />
      </article>
      El Artículo viene de:&nbsp;  
      <a href={ligaRetorno}>{ligaRetorno}</a>
    </Wrapper>
  )
}
export const query = graphql`
  query ArticlePrint($strapiId: Int) {
    article: strapiArticle(strapiId: { eq: $strapiId }) {
      created_at(locale: "ES", formatString: "ddd de  MMM, YYYY")
      strapiId
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
  
`

export default NoticiaTemplate
