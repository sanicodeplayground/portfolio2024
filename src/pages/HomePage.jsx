import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import BlogCards from "./components/BlogCards";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Bio />
      <Projects />
      <BlogCards />
      <Footer />
    </div>
  );
};
export default Home;