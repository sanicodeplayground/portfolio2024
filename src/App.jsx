import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import BlogArticle1 from "./pages/BlogArticle1";
import BlogArticle2 from "./pages/BlogArticle2";
import BlogArticle3 from "./pages/BlogArticle3";
import ContactPage from "./pages/ContactPage";

const basename = process.env.NODE_ENV === "production" ? "/" : "/";

const App = () => {
  return (
    <Router basename={basename}>
      <div class="text-slate-700 dark:text-slate-300">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blogArticle1" element={<BlogArticle1 />} />
          <Route path="/blogArticle2" element={<BlogArticle2 />} />
          <Route path="/blogArticle3" element={<BlogArticle3 />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
