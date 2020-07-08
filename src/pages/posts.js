import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { graphql } from "gatsby"
import Posts from "../components/Posts"
const PostsPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title="todos los posts" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___title, order: ASC }) {
      nodes {
        frontmatter {
          title
          readTime
          category
          date(formatString: "MMMM Do, YYYY")
          author
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

export default PostsPage
