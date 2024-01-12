import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Bio from "./components/Bio";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Bio />
      <h1 className="text-orange-500">Hello world!</h1>
    </div>
  );
};
export default App;
