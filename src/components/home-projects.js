import React from "react";
import Button from "./button";
import Img from "gatsby-image";

function Projects({ projects }) {
  return (
    <section className="py-24 p-8">
      <div className="container mx-auto max-w-7xl flex">
        <div className="bg-gray-300 w-6 h-0.5 my-auto" />
        <h5 className="pl-4">Projects</h5>
      </div>

      <div className="mx-auto grid container grid-cols-2 gap-x-16 max-w-7xl mt-16">
        <div>
          <h2>{projects[0].node.title}</h2>
          <h6 className="my-6">About this project</h6>
          <p className="mb-12 text-lg">{projects[0].node.body.body}</p>
          <div className="flex w-full">
            <Button
              type="secondary"
              className="flex-grow mr-8"
              link={"projects/" + projects[0].node.slug}
            >
              {projects[0].node.title}
            </Button>
            <Button className="flex-grow ml-8">View All Projects</Button>
          </div>
        </div>
        <div>
          <div className="bg-gray-100">
            <h3 className="p-8">{projects[0].node.quote}</h3>
          </div>
          <Img
            className="mt-16"
            fluid={projects[0].node.images[0].fluid}
            key={projects[0].node.images[0].fluid.src}
          />
        </div>
      </div>

      <div className="mx-auto grid container grid-cols-2 gap-x-16 max-w-7xl mt-32">
        <div>
          <div className="bg-gray-100">
            <h3 className="p-8">{projects[1].node.quote}</h3>{" "}
          </div>
          <Img
            className="mt-16"
            fluid={projects[1].node.images[0].fluid}
            key={projects[1].node.images[0].fluid.src}
          />
        </div>
        <div>
          <h2>{projects[1].node.title}</h2>
          <h6 className="my-6">About this project</h6>
          <p className="mb-12 text-lg	">{projects[1].node.body.body}</p>
          <div className="flex w-full">
            <Button
              type="secondary"
              className="flex-grow mr-8"
              link={"projects/" + projects[1].node.slug}
            >
              {projects[1].node.title}
            </Button>
            <Button className="flex-grow ml-8">View All Projects</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
