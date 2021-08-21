import React from "react";
import BackgroundImage from "../media/background.png";
import "../styles/Home.css";

function Home() {
  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="title">
        <h1 className="mainTitle">Gege's Confectionaries</h1>
        <p>
          All things Cake, Dessert, Pastry, Snack... anything you set your
          mind to.. we make.
        </p>
      </div>
    </div>
  );
}

export default Home;
