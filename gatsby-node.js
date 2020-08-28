exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
}

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    {
      allContentfulHikePage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulHikePage.edges.forEach(edge => {
    createPage({
      path: `/wanderungen/${edge.node.slug}`,
      component: path.resolve("./src/templates/page-template.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
