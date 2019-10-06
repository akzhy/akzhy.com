module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
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
            resolve: `gatsby-source-wordpress`,
            options: {
                baseUrl: `akzhy.local`,
                protocol: `http`,
                hostingWPCOM: false,
                useACF: true,
            },
        },
        `gatsby-plugin-theme-ui`
        // `gatsby-plugin-offline`,
    ],
}
