import * as React from "react";
import Menu from "../components/menu";
import Hero from "../components/home-hero";
import About from "../components/home-about";
import Projects from "../components/home-projects";

// markup
const IndexPage = () => {
  return (
    <main className="mx-auto">
      <Menu />
      <Hero />
      <About />
      <Projects />
    </main>
  );
};

export default IndexPage;
