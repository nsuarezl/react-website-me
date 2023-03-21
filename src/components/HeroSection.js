import React from "react";
import "../App.css";
// import { Button } from "./Button";
import "./HeroSection.css";
import Typist from 'react-typist';

function HeroSection() {
  return (
  
    <div className="hero-container">
      <div className="hero-firsthing">
        COPYRIGHT 2002-2022 © NSL INDUSTRIES
      </div>

    
      <Typist className="hero-header">
        Hello, <span className="hero-name">Nelson</span> here.
      </Typist>
      <Typist className="hero-header2">
      <Typist.Delay ms={2000}/> 
        I imagine
        <Typist.Backspace count={9} delay={250} />
        I create
        <Typist.Backspace count={8} delay={250} />
        I code stuff.
      </Typist>
    
    </div>
  

  );
}

export default HeroSection;
