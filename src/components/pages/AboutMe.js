import React from "react";

import "../../App.css";
import Cards from "../Cards";
import FadeInSection from "./FadeIn";
import "../Styles/AboutMe.css";




function AboutMe() {
  return (
    
      <div className="about-container"> 
          <div className="about-header">
            
          /about me
          </div>

          <div className="about-intro">
            I am a senior at <a href="https://floridapoly.edu" target="_blank"> Florida Poly </a>
            {" "}currently studying <b>computer science</b>
          </div>
          <div className="about-intro">
            Over the past few years I have used:
            
            <ul>
              <br></br>
              <li><b>Java</b></li>
              <li><b>React.js</b></li>
              <br></br>
              <li><b>C++</b></li>
              <li><b>HTML and CSS</b></li>
            </ul>
            <div className="about-intro-p">
            Whenever I am not coding stuff, I like to play videogames and listen to music
            </div>
          </div>

      </div>
    
    
  );
}

export default AboutMe;
