import React from "react";
import Typist from "react-typist";
import "../../App.css";
import Cards from "../Cards";
import FadeInSection from "./FadeIn";
import "../Styles/AboutMe.css";
import Fade from 'react-reveal/Fade';



function AboutMe() {
  return (
    <Fade up delay={6000} duration={1000}>
      <div className="about-container"> 
          <Typist className="about-header">
            <Typist.Delay ms={7000}/>
          /about me
          </Typist>

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
            Whenever I am not coding stuff, I like to play videogames and consume TV shows.
            </div>
          </div>

      </div>
    </Fade>
    
  );
}

export default AboutMe;
