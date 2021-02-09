import React from "react";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import Menu from "../components/menu";
import { format } from "date-fns";
import Gallery from "react-grid-gallery";

function Project({ data }) {
  const IMAGES = [];

  data.project.images.map((i) => {
    console.log(400 * i.fluid.aspectRatio);
    const image = {
      src: i.fluid.src,
      thumbnail: i.fluid.src,
      caption: i.title,
    };

    IMAGES.push(image);
  });

  return (
    <main className="mx-auto">
      <Menu />
      <section className="my-8 p-8 mb-32">
        <div className=" container mx-auto text-center w-full flex items-center justify-center max-w-7xl">
          <div className="relative text-center space-y-6 flex flex-col items-center">
            <h1 className="z-40">{data.project.title}</h1>
            <div className="w-6 h-1 bg-gray-700 rounded" />
            <div>
              <h6>{format(new Date(data.project.date), "MMM yyyy")}</h6>
              <h3 className="mt-24 mb-8">Gallery</h3>
              <Gallery
                rowHeight={340}
                margin={16}
                enableImageSelection={false}
                images={IMAGES}
                backdropClosesModal={true}
              />
            </div>
          </div>
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

export default Project;

export const pageQuery = graphql`
  query ProjectTemplateQuery($slug: String!) {
    project: contentfulProject(slug: { eq: $slug }) {
      slug
      title
      quote
      date
      body {
        body
      }
      images {
        title
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
    }
    allContentfulAbout {
      edges {
        node {
          linkedInLink
          instagramLink
          email
        }
      }
    }
  }
`;
