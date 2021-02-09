import React from "react";
import Button from "./button";
import Img from "gatsby-image";

const Hero = ({ data, latestProjectSlug, leaves }) => {
  return (
    <section>
      <div className="top-64 -left-64 absolute">
        <Img
          fixed={leaves}
          imgStyle={{ maxHeight: "550px", maxWidth: "550px" }}
        />
      </div>
      <div className="absolute -right-96 -top-64 ">
        <Img
          className="transform -rotate-180"
          fixed={leaves}
          imgStyle={{
            maxHeight: "620px",
            maxWidth: "620px",
          }}
        />
      </div>
      <div className="relative container mx-auto text-center my-32 p-8 h-96 w-full flex items-center justify-center max-w-7xl">
        <div className="absolute bg-pink-100 rounded-full transform left-1/2 -translate-x-1/2 w-96 h-full"></div>
        <div className="relative text-center space-y-6 flex flex-col items-center">
          <h1 className="z-40">{data.title}</h1>
          <div className="w-6 h-1 bg-gray-700 rounded"></div>
          <h4 className="max-w-screen-sm">{data.subtitle}</h4>
          <div className="flex place-items-center space-x-8 pt-6">
            <Button link={`projects/${latestProjectSlug}`}>
              View Latest Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
