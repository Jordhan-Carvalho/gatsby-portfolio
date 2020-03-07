import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import TagsList from "../components/tagsList"
import postStyles from "../components/postList.module.scss"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } na categoria "${tag}"`

  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <TagsList />

      <ol className={postStyles.posts}>
        {edges.map(each => (
          <li className={postStyles.post} key={each.node.frontmatter.title}>
            <Link to={`/blog/${each.node.fields.slug}`}>
              <h2>{each.node.frontmatter.title}</h2>
              <p>{each.node.frontmatter.subtitle}</p>
              <p>{each.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              subtitle: PropTypes.string.isRequired,
              tags: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            tags
            subtitle
          }
        }
      }
    }
  }
`
