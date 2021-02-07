const path = require(`path`);
const slash = require("slash");

const { default: postcss } = require("postcss");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allContentfulProject {
        edges {
          node {
            title
            quote
            slug
            body {
              body
            }
          }
        }
      }
    }
  `)
    .then((result) => {
      if (result.errors) {
        console.log("Error with contentful data", result.errors);
      }

      const projectTemplate = path.resolve("./src/pages/project.js");

      result.data.allContentfulProject.edges.forEach((project) => {
        createPage({
          path: `/projects/${project.node.slug}/`,
          component: slash(projectTemplate),
          context: {
            slug: project.node.slug,
          },
        });
      });
    })
    .catch((error) => console.log("Error with contentful data", error));
};
