import React from 'react'
// needed only graphql not useQuery to work with dynamic querys
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

export const query = graphql`
query (
    $slug: String!
  ) {
    markdownRemark (fields: {
      slug: {
        eq: $slug
      }
    }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = (props) => {
    console.log(props)
    return ( 
        <Layout>
          <Head title={props.data.markdownRemark.frontmatter.title}/>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div className={blogStyles.centered} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
        </Layout>
     );
}
 
export default Blog;