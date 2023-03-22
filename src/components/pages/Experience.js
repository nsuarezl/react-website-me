import React, { useEffect, useState } from "react";
import "../../App.css";
import Fade from 'react-reveal/Fade';
import Typist from "react-typist";
import "../Styles/Experience.css";

class Experience extends React.Component {

  state = {
    text: 'something'
  }

  onClickButton1 = () => {
    this.setState({
      text: 'clicked 1'
    });
  }

  onClickButton2 = () => {
    this.setState({
      text: 'clicked 2'
    });
  }
  render(){
  return (
    <Fade up delay={7000} duration={1000}>
      <div className="exp-container"> 
          <Typist className="exp-header">
          <Typist.Delay ms={8000}/>
          /experience
          </Typist>
        <button onClick={() => this.onClickButton1()}>
          Button 1
        </button>
        <button onClick={() => this.onClickButton2()}>
          Button 2
        </button>
        <h1>{this.state.text}</h1>    
      </div>
    </Fade>
  );}
}
export default Experience;