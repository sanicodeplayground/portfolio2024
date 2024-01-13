import React from "react";
import Hero from "../components/Hero";
import Bio from "../components/Bio";
import Projects from "../components/Projects";
import BlogCards from "../components/BlogCards";

const Home = () => {
  return (
    <div>
      <Hero />
      <Bio />
      <Projects />
      <BlogCards />
    </div>
  );
};

export default Home;
