import React from "react";
import "../css/pages.css";
import { Carousel } from "../components/Carousel";
//import useSound from "use-sound";
//import mySound from "../assets/sounds/yourSound.mp3";
//import Impact from "../components/Carousel.js";

const HomePage = () => {
  //useSound;
  return (
    <div className="contenedor ">
      <h2 className="big-title">Game of Thrones</h2>
      <div className="contenedor home-news "></div>
      {/* <div className="home-imagen">
        <img
          src={require("../images/gifs/Intro-2.gif")}
          className="imagen"
          alt={"Game of Thrones}"}
        />
      </div> */}
      <div className="contenedor">
        <Carousel />
      </div>
      ;
    </div>
  );
};

export default HomePage;
