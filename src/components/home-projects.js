import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function Projects() {
  return (
    <section className="py-16">
      <div className="flex container mx-auto max-w-7xl">
        <div className="bg-gray-300 w-6 h-0.5 my-auto" />
        <h5 className="uppercase pl-4">Projects</h5>
      </div>
      <div class="container mx-auto grid grid-cols-2 max-w-7xl mt-16">
        <div>
          <h2>The Haunted Mansion</h2>
          <h6 className="mt-4">About this project</h6>
          <p className="mt-4 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
        </div>
        <div>
          <div className="bg-gray-400">
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
