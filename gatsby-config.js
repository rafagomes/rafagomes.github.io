module.exports = {
    siteMetadata: {
        title: `Rafa Gomes digital resume.`,
        description: `Description.`,
        author: `@rafagomes`,
        menuLinks: [
            { name: "Home", link: "/" },
            { name: "Resume", link: "/resume" },
            { name: "Contact", link: "/contact" },
            {
                name: "Linkedin",
                link: "https://www.linkedin.com/in/rafagomesdev/",
                external: true,
            },
            {
                name: "Twitter",
                link: "https://twitter.com/rafagomes_dev",
                external: true,
            },
        ],
    },
    plugins: [
        `gatsby-plugin-emotion`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-transition-link`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/markdown-pages`,
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Roboto`,
                        variants: [`100`, `300`, `400`],
                        subsets: [`latin`],
                    },
                ],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-custom-blocks",
                        options: {
                            blocks: {
                                area: {
                                    classes: "resume-block",
                                },
                            },
                        },
                    },
                ],
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
