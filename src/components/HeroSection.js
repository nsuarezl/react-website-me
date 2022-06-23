import React from "react";
import "../App.css";
// import { Button } from "./Button";
import "./HeroSection.css";
import Typewriter from "typewriter-effect";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello, Nelson here\n")
              .pauseFor(250)
              .typeString("sometimes I code things.")
              .start();
          }}
        />
      </h1>
      <div className="hero-intro">
        I'm a computer science student based in Central Florida. I have an
        interest in front-end development, artificial intelligence and all
        things in between.
      </div>

    </div>
  );
}

export default HeroSection;
