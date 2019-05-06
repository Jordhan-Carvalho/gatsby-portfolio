const path = require('path')


  module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    //get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js')
    //2. get markdown data
    const result = await graphql(`
    query {
      allContentfulBlogPost{
        edges {
          node {
            slug
          }
        }
      }
    }
    `)
    //3. create new pages
    result.data.allContentfulBlogPost.edges.forEach((each) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${each.node.slug}`,
            context: {
                slug: each.node.slug
            }
        })
    })
  }