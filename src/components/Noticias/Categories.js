import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
export const query = graphql`
  {
    categos: allStrapiCategories {
      nodes {
        title
        slug
      }
    }
  }
`

const Categories = () => {
  const categories = useStaticQuery(query)

  return (
    <ul className="categories">
      {categories.categos.nodes.map((category, index) => {
        return (
          <li key={index}>
            <Link
              to={`/categoria/${category.slug}`}
              className="category"
              activeStyle={{ color: "var(--clr-red-dark)" }}
            >
              {category.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Categories
