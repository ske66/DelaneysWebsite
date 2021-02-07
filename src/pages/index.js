import React from "react";
import Menu from "../components/menu";
import Hero from "../components/home-hero";
import About from "../components/home-about";
import Projects from "../components/home-projects";
import Contact from "../components/home-contact";
import Footer from "../components/footer";
import { graphql } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <main className="mx-auto">
      <Menu />
      <Hero data={data.allContentfulHero.edges[0].node} />
      <About data={data.allContentfulAbout.edges[0].node} />
      <Projects projects={data.allContentfulProject.edges} />
      <Contact />
      <Footer
        email={data.allContentfulAbout.edges[0].node.email}
        instagram={data.allContentfulAbout.edges[0].node.instagramLink}
        linkedIn={data.allContentfulAbout.edges[0].node.linkedInLink}
      />
    </main>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
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
    allContentfulHero {
      edges {
        node {
          title
          subtitle
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
