const path = require("path");

module.exports = {
    siteMetadata: {
        title: `akzhy`,
        siteUrl: 'http://akzhy.com/',
        description: `Hello, I am Akshay I am a web developer who is very passionate about web development and related fields. I've been into web designing since i was 15 and thats when i discovered my passion for it.I am also into a bit of graphic designing, though i am no pro at it.`,
        author: `@_akzhy`,
    },
    plugins: [
        {
            resolve: `gatsby-source-wordpress-experimental`,
            options: {
                url: `http://akzhy.local/graphql`,
                useACF: true,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-typegen`,
            options: {
                outputPath: `src/__generated__/gatsby-types.d.ts`,
                emitSchema: {
                    'src/__generated__/gatsby-introspection.json': true,
                },
                emitPluginDocuments: {
                    'src/__generated__/gatsby-plugin-documents.graphql': true,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                components: path.join(__dirname, 'src/components'),
                utils: path.join(__dirname, 'src/utils'),
                pages: path.join(__dirname, 'src/pages'),
                templates: path.join(__dirname, 'src/templates'),
            }
        },
        `gatsby-plugin-postcss`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-sitemap`,
        // `gatsby-plugin-offline`,
    ],
}
