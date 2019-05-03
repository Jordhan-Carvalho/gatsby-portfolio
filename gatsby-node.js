const path = require('path')


module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
    
  }

  module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    //get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js')
    //2. get markdown data
    const result = await graphql(`
    query {
        allMarkdownRemark {
          edges{
            node{
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    //3. create new pages
    result.data.allMarkdownRemark.edges.forEach((each) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${each.node.fields.slug}`,
            context: {
                slug: each.node.fields.slug
            }
        })
    })
  }