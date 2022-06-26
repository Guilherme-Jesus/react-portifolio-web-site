import React from "react";
import CardItem from "../pages/CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Veja esses destinos Épicos!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* # Mantendo os cards dentro da mesma tag <ul> tornam-se apenas uma coluna */}
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the Islands of Bali in a private Cruise"
              label="Luxury"
              path="/services"
            />
            {/* # Se eu manter 2 a 3 dentro de uma tag <ul> eles se posicionam um do lado do outro*/}
          </ul>          
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilaya"
              label="Adventure"
              path="/services"
            />           
             <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided"
              label="Adrenaline"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
