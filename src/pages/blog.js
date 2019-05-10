import React from 'react'

import Layout from '../components/layout'
import PostList from '../components/postList'
import Head from '../components/head'

const BlogPage = () => {

    return ( 
        <Layout >
            <Head title="Blog"/>
            <h1>Blog  Posts</h1>
            <PostList />
        </Layout>
     );
}
 
export default BlogPage;