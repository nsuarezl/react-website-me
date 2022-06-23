import React from "react";
import "./App.css";
import "./crt.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import AboutMe from "./components/pages/AboutMe";
import ContactMe from "./components/pages/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="crt">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
