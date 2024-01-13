import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import BlogCards from "./components/BlogCards";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';


const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        
      <Hero />
      <Bio />
      <Projects />
      <BlogCards />
      <ContactForm />
      <Footer />
      </div>
    </Router>
  );
}

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Hero />
//       <Bio />
//       <Projects />
//       <BlogCards />
//       <ContactForm />
//       <Footer />
//     </div>
//   );
// };
export default App;
