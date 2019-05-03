import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import postStyles from "./postList.module.scss"

const PostList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <ol className={postStyles.posts}>
      {data.allMarkdownRemark.edges.map(each => (
        <li className={postStyles.post} key={each.node.frontmatter.title}>
          <Link to={`/blog/${each.node.fields.slug}`}>
            <h2>{each.node.frontmatter.title}</h2>
            <p>{each.node.frontmatter.date}</p>
          </Link>
        </li>
      ))}
    </ol>
  )
}

export default PostList
