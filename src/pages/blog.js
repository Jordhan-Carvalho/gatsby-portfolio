import React from "react"

import Layout from "../components/layout"
import PostList from "../components/postList"
import TagsList from "../components/tagsList"
import Head from "../components/head"

const BlogPage = () => {
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <p style={{ color: "grey" }}>
        <em>
          Anotações pessoais, realizadas enquanto estou aprendendo algo novo ou
          revendo velhos conceitos, decidi deixa-las públicas, pois poderá ser
          útil a mais alguém.
        </em>
      </p>
      <TagsList />
      <PostList />
    </Layout>
  )
}

export default BlogPage
