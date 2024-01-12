import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import BlogCards from "./components/BlogCards";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Bio />
      <BlogCards />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
};
export default App;
