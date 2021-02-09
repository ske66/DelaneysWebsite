import React from "react";
import Img from "gatsby-image";
import Button from "./button";
import { InstagramButton, LinkedInButton, EmailButton } from "./icon_button";
import cv from "../downloads/CV-2021.pdf";

function About({ data }) {
  return (
    <section className="bg-pink-100 py-24 p-8">
      <div className="flex container mx-auto max-w-7xl ">
        <div className="bg-gray-300 w-6 h-0.5 my-auto" />
        <h5 className="pl-4">About</h5>
      </div>
      <div className="container mx-auto grid grid-cols-4 max-w-7xl my-16">
        <Img
          className="rounded-full h-80 w-80 object-cover object-bottom"
          fluid={data.image.fluid}
          key={data.image.fluid.src}
        />
        <div className="col-span-3 my-auto ml-16">
          <h2>{data.title}</h2>
          <h6 className="mt-4">{data.subtitle}</h6>
          <p className="mt-4 mb-12">{data.content.content}</p>
          <div className="flex space-x-8">
            <Button href={cv}>View My CV</Button>
            <div className="flex space-x-8">
              <InstagramButton link={data.instagramLink} />
              <LinkedInButton link={data.linkedInLink} />
              <EmailButton link={"mailto:" + data.email} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
