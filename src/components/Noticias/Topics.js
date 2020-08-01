import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
export const query = graphql`
  {
    topics: allStrapiTopic {
      nodes {
        title
        slug
      }
    }
  }
`

const Topics = () => {
  const result = useStaticQuery(query)

  return (
    <ul className="categories">
      {result.topics.nodes.map((item, index) => {
        return (
          <li key={index}>
            <Link
              to={`/tema/${item.slug}`}
              className="category"
              activeStyle={{ color: "var(--clr-red-dark)" }}
            >
              {item.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Topics
