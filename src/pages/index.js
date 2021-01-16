import * as React from "react";
import Menu from "../components/menu";
import Hero from "../components/hero";
import About from "../components/about";

// markup
const IndexPage = () => {
  return (
    <main className="mx-auto">
      <Menu />
      <Hero />
      <About />
    </main>
  );
};

export default IndexPage;
