const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allWordpressPage {
                edges {
                    node {
                        id
                        path
                        status
                    }
                }
            }
            allWordpressPost {
                edges {
                    node {
                        id
                        path
                        status
                    }
                }
            }
        }
    `)

    if (result.errors) {
        throw new Error(result.errors)
    }

    const { allWordpressPage, allWordpressPost } = result.data

    const pageTemplate = path.resolve(`./src/templates/page.js`)
    
    allWordpressPage.edges.forEach(edge => {
        createPage({
            path: edge.node.path,
            component: slash(pageTemplate),
            context: {
                id: edge.node.id,
            },
        })
    })

    const postTemplate = path.resolve(`./src/templates/post.js`);

    allWordpressPost.edges.forEach(edge => {
        createPage({
            path: edge.node.path,
            component: slash(postTemplate),
            context: {
                id: edge.node.id,
            },
        })
    })
}
