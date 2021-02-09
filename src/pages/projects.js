import React from "react";
import { graphql, Link } from "gatsby";
import Footer from "../components/footer";
import Menu from "../components/menu";
import Img from "gatsby-image";
import Button from "../components/button";
import BackgroundImage from "gatsby-background-image";

function listItem(project) {
  return (
    <div
      key={project.slug}
      className="text-center my-12 bg-white shadow max-w-2xl mx-auto hover:shadow-2xl transition duration-300 ease-in-out"
    >
      <Link to={project.slug}>
        <BackgroundImage
          className="mx-auto text-center group"
          style={{ width: "360px", height: "500px" }}
          fluid={project.images[0].fluid}
          key={project.images[0].fluid.src}
        >
          <div className="w-full h-full flex transition duration-300 ease-in-out opacity-0 hover:bg-pink-300 hover:opacity-90">
            <div className="p-8 mb-auto mt-auto text-center mx-auto">
              <h2 className="text-white">{project.title}</h2>
            </div>
          </div>
        </BackgroundImage>
      </Link>
    </div>
  );
}

function Projects({ data }) {
  return (
    <main className="mx-auto bg-gray-50">
      <Menu />
      <section className="my-8 p-8">
        <div className=" container mx-auto text-center w-full flex items-center justify-center max-w-2xl">
          <div className="relative text-center space-y-6 flex flex-col items-center">
            <h1 className="z-40">Projects</h1>
            <div className="w-6 h-1 bg-gray-700 rounded"></div>
            <div className="flex place-items-center space-x-8"></div>
          </div>
        </div>
        <div className="grid-cols-2 grid max-w-5xl mx-auto">
          {data.allContentfulProject.edges.map((project) =>
            listItem(project.node)
          )}
        </div>
      </section>
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
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
