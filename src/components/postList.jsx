import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import postStyles from "./postList.module.scss"

const PostList = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `)

  return (
    <ol className={postStyles.posts}>
      {data.allContentfulBlogPost.edges.map(each => (
        <li className={postStyles.post} key={each.node.title}>
          <Link to={`/blog/${each.node.slug}`}>
            <h2>{each.node.title}</h2>
            <p>{each.node.publishedDate}</p>
          </Link>
        </li>
      ))}
    </ol>
  )
}

export default PostList
