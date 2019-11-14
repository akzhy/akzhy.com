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
                        categories {
                            name
                        }
                    }
                }
            }
            shelf: allWordpressPost(
                filter: { categories: { elemMatch: { name: { eq: "shelf" } } } }
            ) {
                edges {
                    node {
                        id
                        path
                        status
                    }
                }
            }
            blog: allWordpressPost(
                filter: { categories: { elemMatch: { name: { eq: "blog" } } } }
            ) {
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

    const {
        allWordpressPage,
        allWordpressPost,
        shelf,
        blog,
    } = result.data

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

    const postTemplate = path.resolve(`./src/templates/post.js`)

    allWordpressPost.edges.forEach(edge => {
        createPage({
            path: edge.node.path,
            component: slash(postTemplate),
            context: {
                id: edge.node.id,
                category: edge.node.categories[0].name
            },
        })
    })

    const itemsPerPage = 10;

    const numShelfItems = Math.ceil(shelf.edges.length / itemsPerPage);
    const numBlogItems = Math.ceil(blog.edges.length / itemsPerPage);

    paginate("shelf", numShelfItems, itemsPerPage);
    paginate("blog", numBlogItems, itemsPerPage);

    function paginate(type, total, itemsPerPage){
        Array.from({ length: total }).forEach((_, i) => {
            createPage({
                path: `/${type}/${i + 1}`,
                component: path.resolve(
                    `./src/templates/${type}-list.js`
                ),
                context: {
                    limit: itemsPerPage,
                    skip: i * itemsPerPage,
                    numPages: total,
                    currentPage: i + 1,
                },
            })
            if (i === 0) {
                createPage({
                    path: `/${type}/`,
                    component: path.resolve(
                        `./src/templates/${type}-list.js`
                    ),
                    context: {
                        limit: itemsPerPage,
                        skip: i * itemsPerPage,
                        numPages: total,
                        currentPage: i + 1,
                    },
                })
            }
        })
    }
}

