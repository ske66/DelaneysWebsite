import React from "react";
import { Link, graphql } from "gatsby";

function Project({ data }) {
  return (
    <div>
      <h1>{data.project.title}</h1>
    </div>
  );
}

export default Project;

export const pageQuery = graphql`
  query($slug: String!) {
    project: contentfulProject(slug: { eq: $slug }) {
      slug
      title
      quote
      body {
        body
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
