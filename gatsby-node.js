const path = require(`path`)
const slash = require(`slash`)
const fs = require('fs')

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `#graphql
        type WpPost implements Node {
            title: String!
            content: String!
            slug: String!
            date: Date!
            featuredImage: WpNodeWithFeaturedImageToMediaItemConnectionEdge!
            acf: WpPost_Acf!
        }
        type WpShelf implements Node {
            title: String!
            content: String!
            slug: String!
            date: Date!
            featuredImage: WpNodeWithFeaturedImageToMediaItemConnectionEdge!
            acf: WpShelf_Acf!
        }
        type WpPage implements Node {
            title: String!
            content: String!
            slug: String!
            date: Date!
            acf: WpPage_Acf!
        }
    `
    createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // prettier-ignore
    const result = await graphql(`#graphql
        {
            allWpPage {
                edges {
                    node {
                        id
                        slug
                        status
                    }
                }
            }
            shelf: allWpShelf {
                edges {
                    node {
                        id
                        slug
                        status
                    }
                }
            }
            blog: allWpPost {
                edges {
                    node {
                        id
                        slug
                        status
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw new Error(result.errors)
    }

    const { allWpPage, shelf, blog } = result.data

    const pageTemplate = path.resolve(`./src/templates/page.tsx`)

    allWpPage.edges.forEach((edge) => {
        createPage({
            path: `${edge.node.slug}`,
            component: slash(pageTemplate),
            context: {
                id: edge.node.id,
            },
        })
    })

    blog.edges.forEach((edge) => {
        createPage({
            path: `blog/${edge.node.slug}`,
            component: slash(path.resolve(`./src/templates/blog.tsx`)),
            context: {
                id: edge.node.id,
            },
        })
    })

    shelf.edges.forEach((edge) => {
        createPage({
            path: `shelf/${edge.node.slug}`,
            component: slash(path.resolve(`./src/templates/shelf.tsx`)),
            context: {
                id: edge.node.id,
            },
        })
    })

    const itemsPerPage = 10

    const numShelfItems = Math.ceil(shelf.edges.length / itemsPerPage)
    const numBlogItems = Math.ceil(blog.edges.length / itemsPerPage)

    paginate('shelf', numShelfItems, itemsPerPage)
    paginate('blog', numBlogItems, itemsPerPage)

    function paginate(type, total, itemsPerPage) {
        Array.from({ length: total }).forEach((_, i) => {
            createPage({
                path: `/${type}/${i + 1}`,
                component: path.resolve(`./src/templates/${type}-list.tsx`),
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
                    component: path.resolve(`./src/templates/${type}-list.tsx`),
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
