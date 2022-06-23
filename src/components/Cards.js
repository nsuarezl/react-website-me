import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1> Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/folderItem.jpg"
              text="Explore the hidden"
              label="Yo mama"
              path="/projects"
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
