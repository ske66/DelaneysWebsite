import React from "react";
import Button from "./button";
import Img from "gatsby-image";

const Hero = ({ data, image }) => {
  return (
    <section className="my-32 p-8">
      <div className="relative container mx-auto text-center h-96 w-full flex items-center justify-center max-w-7xl">
        <div className="absolute bg-pink-100 rounded-full transform left-1/2 -translate-x-1/2 w-96 h-full"></div>
        <div className="relative text-center space-y-6 flex flex-col items-center">
          <h1 className="z-40">{data.title}</h1>
          <div className="w-6 h-1 bg-gray-700 rounded"></div>
          <h4 className="max-w-screen-sm">{data.subtitle}</h4>
          <div className="flex place-items-center space-x-8">
            <Button>Recent Project</Button>
            <Button>Past Projects</Button>
          </div>
        </div>
      </div>
      <img src={image.src} />
    </section>
  );
};

export default Hero;
