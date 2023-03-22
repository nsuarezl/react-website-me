import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import FadeIn from "./pages/FadeIn";

function Cards() {
  return (
      <div className="cards">
        <div className="about-header"> /Projects</div>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/folderItem.jpg"
                text="Explore the hidden"
                label="Yo mama"
                path="https://google.com"
              />
              <CardItem
                src="images/folderItem.jpg"
                text="Explore the hidden"
                label="Yo mama"
                path="/projects"
              />
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Cards;
