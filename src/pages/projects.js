import React from "react";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import Menu from "../components/menu";

function Projects({ data }) {
  return (
    <main className="mx-auto">
      <Menu />
      <section className="my-32 p-8">
        <div className="relative container mx-auto text-center h-96 w-full flex items-center justify-center max-w-7xl">
          <div className="absolute bg-pink-100 rounded-full transform left-1/2 -translate-x-1/2 w-96 h-full"></div>
          <div className="relative text-center space-y-6 flex flex-col items-center">
            <h1 className="z-40">sdnsand,asn</h1>
            <div className="w-6 h-1 bg-gray-700 rounded"></div>
            <h4 className="max-w-screen-sm">nsadjasj</h4>
            <div className="flex place-items-center space-x-8"></div>
          </div>
        </div>
      </section>{" "}
      <Footer
        email={data.allContentfulAbout.edges[0].node.email}
        instagram={data.allContentfulAbout.edges[0].node.instagramLink}
        linkedIn={data.allContentfulAbout.edges[0].node.linkedInLink}
      />
    </main>
  );
}

export default Projects;

export const pageQuery = graphql`
  query ProjectsPageQuery {
    allContentfulAbout {
      edges {
        node {
          title
          subtitle
          content {
            content
          }
          linkedInLink
          instagramLink
          email
          image {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    }
    allContentfulProject {
      edges {
        node {
          title
          quote
          slug
          body {
            body
          }
          images {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    }
  }
`;
