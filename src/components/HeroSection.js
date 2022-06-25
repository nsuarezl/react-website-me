import React from "react";
import "../App.css";
// import { Button } from "./Button";
import "./HeroSection.css";
import Typewriter from "typewriter-effect";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-firsthing">
        COPYRIGHT 2002-2022 © NSL INDUSTRIES
      </div>
      <div className="hero-header">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(">Hello, Nelson here.")
              .start();
          }}
        />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(3500)
              .typeString(">I code things sometimes.")
              .start();
          }}
        />
      </div>
    
      <div className="hero-intro">
        I'm a computer science student based in Central Florida. I have an
        interest in front-end development, artificial intelligence, music and all
        things in between.
      </div>
 
    </div>
  );
}

export default HeroSection;
