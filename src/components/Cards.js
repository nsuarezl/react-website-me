import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import FadeIn from "./pages/FadeIn";

function Cards() {
  return (
      <div className="cards">
        <div className="about-header"> /projects</div>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images\github.png"
                text="DigiLark"
                label="Linux | Bash"
                path="https://github.com/nsuarezl/LarkProject"
              />
              <CardItem
                src="images\github.png"
                text="CinemaPal"
                label="Android | Java | NoSQL"
                path="https://github.com/nsuarezl/CinemaPal"
              />
              <CardItem
                src="images\github.png"
                text="Personal Website"
                label="React.JS | CSS"
                path="https://github.com/nsuarezl/react-website-me"
              />
              <CardItem
                src="images\github.png"
                text="SoundBook"
                label="Architecture for Web Page Project"
                path="https://github.com/nsuarezl/SoundBook"
              />
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Cards;
