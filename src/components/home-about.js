import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Button from "./button";
import { InstagramButton, LinkedInButton, EmailButton } from "./icon_button";

function About() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "delaney.png" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `);

  const delaney = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero_leaves.png" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <section className="bg-pink-100 py-16">
      <div className="flex container mx-auto max-w-7xl ">
        <div className="bg-gray-300 w-6 h-0.5 my-auto" />
        <h5 className="uppercase pl-4">About</h5>
      </div>
      <div class="container mx-auto grid grid-cols-4 max-w-7xl my-16">
        <Img
          className="rounded-full h-80 w-full object-cover object-bottom"
          fluid={data.file.childImageSharp.fluid}
        />
        <div className="col-span-3 my-auto ml-16">
          <h2>Hi, I'm Delaney</h2>
          <h6 className="mt-4">
            Costume Designer/Maker &amp; Disney Enthusiast
          </h6>
          <p className="mt-4 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
          <div className="flex space-x-8">
            <Button text="Contact Me" />
            <div className="flex space-x-8">
              <InstagramButton />
              <LinkedInButton />
              <EmailButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
