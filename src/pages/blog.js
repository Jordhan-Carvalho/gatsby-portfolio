import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import PostList from '../components/postList'

const BlogPage = () => {

    return ( 
        <Layout >
            <h1>Blog  Posts</h1>
            <PostList />
        </Layout>
     );
}
 
export default BlogPage;