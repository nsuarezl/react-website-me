import React, { useEffect, useState } from "react";
import "../../App.css";
import Fade from 'react-reveal/Fade';
import Typist from "react-typist";
import "../Styles/Experience.css";
import styled from "styled-components";

const ButtonGroup = styled.div`
display: flex;
  margin-left:250px;
  margin-right:250px;
`

const Button = styled.button`
  font: 1.3rem Inconsolata, monospace;
  background-color: green;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  display:block;
  
  
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`;



class Experience extends React.Component {
  state = {
    exp: 'Change me!',
  };
  constructor(props) {
    super(props);
  }
  changeState = () => {
    this.setState({
      exp: 'Developing and implementing NPC AI behavior for Virtual Bariatric Endoscopy Simulator (ViBE) using finite state machines and Unity.',
    });
  };
  changeState2 = () => {
    this.setState({
      exp: ' I oversee 40 Residents and directly mentor 5 Resident Assistants. I also serve on a 24/7 on-call rotation to approximately 800 residential students, where I am the first response to a wide array of on-campus emergencies. I also plan events for 800+ Students with a group of Resident Assistants, as well as design flyers for events using Canva.',
    });
  };
  changeState3 = () => {
    this.setState({
      exp: 'Working alongside Vice Provost for Enrollment to find technical errors and improve the SEO of the Florida Poly Website. Improved SEO score from 87-92 (out of 100). Grew organic web traffic by 29.1%.',
    });
  };
  changeState4 = () => {
    this.setState({
      exp: 'Worked with the Media and Analytics team to implement on-page and technical SEO recommendations. Programmed alongside the Web Development team to implement client web page changes. Utilized Google Analytics, Screaming Frog, WordPress, React.JS, and Docker',
    });
  };
  render(){
    const state = this.state;
  return (
    
      <div className="exp-container" > 
          <Typist className="exp-header">
          
          /experience
          </Typist>

          <ButtonGroup>
            <Button onClick={this.changeState}> Florida Polytechnic University | Dept. of Computer Science </Button>
            <Button onClick={this.changeState2}> Florida Polytechnic University | Student Affairs </Button>
            <Button onClick={this.changeState3}> CNP Agency </Button>
            <Button onClick={this.changeState4}> Florida Polytechnic University | Office of Admissions </Button>
          </ButtonGroup>
          <div className="exp-intro">{state.exp}</div>
        
      </div>
    
  );}
}
export default Experience;