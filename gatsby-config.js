module.exports = {
  siteMetadata: {
    title: `Rafa Gomes digital resume.`,
    description: `Description.`,
    author: `@rafagomes`,
    menuLinks: [
      { name: 'Home', link: '/'},
      { name: 'Resume', link: '/resume'},
      { name: 'Linkedin', link: 'http://linkedin', external: true},
      { name: 'Twitter', link: 'http://twitter', external: true},
      { name: 'Contact', link: '/contact'},
    ]
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
