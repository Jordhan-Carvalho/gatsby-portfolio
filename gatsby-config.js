module.exports = {
    siteMetadata: {
      title: 'Jordhan.Dev',
      author: 'Jordhan Carvalho'
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `src`,
            path: `${__dirname}/src/`,
          },
        },
        `gatsby-plugin-sharp`,
        {
          resolve: `gatsby-transformer-remark`,
          options: {
            plugins: [
              `gatsby-remark-relative-images`,
              {
                resolve:`gatsby-remark-images`,
                options: {
                  maxWidth: 750,
                  linkImagesToOriginal: false
                }
              }
            ]
          }
        }
      ]

}
