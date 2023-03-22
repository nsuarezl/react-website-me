import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";
import Experience from "./components/pages/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="a">
      <div className="App">
        <Router>
          <HeroSection></HeroSection>
          <AboutMe></AboutMe>
          <Experience></Experience>
          <Cards></Cards>
          <Footer></Footer>
        </Router>
      </div>
    </div>
  );
}

export default App;
