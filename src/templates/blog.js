import React from "react"
// needed only graphql not useQuery to work with dynamic querys
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import blogStyles from "./blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        subtitle
      }
      html
    }
  }
`

const Blog = ({ data }) => {
  return (
    <Layout>
      <Head title={data.markdownRemark.frontmatter.title} />
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>
        <strong>{data.markdownRemark.frontmatter.subtitle}</strong>
      </p>
      <span style={{ color: "grey", fontSize: 15 }}>
        <em>{data.markdownRemark.frontmatter.date}</em>
      </span>
      <hr />
      <div
        className={blogStyles.centered}
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </Layout>
  )
}

export default Blog
