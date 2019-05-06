module.exports = {
    siteMetadata: {
      title: 'Jordhan.Dev',
      author: 'Jordhan Carvalho'
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
          resolve: `gatsby-source-contentful`,
          options: {
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          }
        },
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