import React from "react";
import "../css/pages.css";

const HomePage = () => {
  return (
    <div className="contenedor">
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
      ;
    </div>
  );
};

export default HomePage;
