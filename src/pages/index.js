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
  return (
    <main className="mx-auto">
      <Menu />
      <Hero
        leaves={data.allFile.edges[0].node.childImageSharp.fixed}
        latestProjectSlug={data.allContentfulProject.edges[0].node.slug}
        data={data.allContentfulHero.edges[0].node}
      />
      <About
        backgroundImage={data.allFile.edges[2].node.childImageSharp.fluid}
        data={data.allContentfulAbout.edges[0].node}
      />
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
    allFile {
      edges {
        node {
          childImageSharp {
            fixed(width: 800, height: 800) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
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
              ...GatsbyContentfulFluid
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
          featureImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
