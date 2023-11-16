import React from "react";
import "../css/pages.css";
//import useSound from "use-sound";
//import mySound from "../assets/sounds/yourSound.mp3";
import Impact from "../components/Carousel.js";

const HomePage = () => {
  //useSound;
  return (
    <div className="">
      <h2 className="big-title">Game of Thrones</h2>
      <div className="contenedor">
        <div className="contenedor"></div>
        <div className="imagen">
          <img
            src={require("../images/gifs/Intro-2.gif")}
            className="imagen"
            alt={"Game of Thrones}"}
          />
        </div>
      </div>
      <div className="contenedor">
        <Impact />
      </div>
      ;
    </div>
  );
};

export default HomePage;
