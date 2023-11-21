import React, { useState, useEffect } from "react";
import "../css/character.css";
import "../css/house.css";
import "../css/pages.css";

import getIdCodeFromUrl from "../services/getIdCodeFromUrl";
import getOneCharacter from "../services/getOneCharecter";
import getNameOfCharacter from "../services/getNameOfCharacter";
import getLocalImage from "../services/getLocalimage";
import {
  getLastSubString,
  fileExists,
  hasRegion,
  getEscImg,
} from "../services/helperFunctions";

export default function HouseComponent({ house }) {
  let {
    name,
    region,
    coatOfArms,
    words,
    currentLord,
    heir,
    founded,
    founder,
    diedOut,
  } = house;
  console.log("house", house);

  let initialNames = {
    lord: "Serching",
    founder: "Serching",
    heir: "Serching",
  };

  console.log("house ", typeof house);

  const [names, setNames] = useState(initialNames);

  const charImg = require.context("../images/regions", true);
  const charEsc = require.context("../images/Escudos", true);

  //console.log("charImg: ", charImg);

  //imageUrl = hasRegion(region);
  //console.log("imageUrl luego del has: ", imageUrl);

  async function getNames(currentLord, heir, founder) {
    let textLord = "No available";
    let texfounder = "No available";
    let textHeir = "No available";

    currentLord
      ? (textLord = await getNameOfCharacter(currentLord))
      : "No found";

    founder ? (texfounder = await getNameOfCharacter(founder)) : "No found";

    textHeir ? (textHeir = await getNameOfCharacter(heir)) : "No found";

    console.log(
      " house object from  getNames:",
      `textLord: ${textLord} - texfounder: ${texfounder}  -  textHeir: ${textHeir} `
    );
    return { lord: textLord, founder: texfounder, heir: textHeir };
  }

  useEffect(() => {
    let newNames = getNames(currentLord, founder, heir).then((newNames) => {
      setNames(newNames);

      currentLord = newNames.currentLord;
      founder = newNames.founder;
      heir = newNames.heir;
      //  console.log("newNames: ", newNames);
    });

    console.log("names in set names", names);
  }, []);

  let imageUrl;
  imageUrl = "UNKNOWN.png";
  let EscUrl = "ESCNoAvailable.png";

  console.log("igetLastSubString(region); ", getLastSubString(region));
  imageUrl = getLastSubString(region).trim().toUpperCase() + ".jpg";
  EscUrl = "ESC" + getEscImg(name).trim() + ".png";
  console.log("imageUrl: ", EscUrl);

  if (
    imageUrl == "PENDING.jpg" ||
    imageUrl == "NECK.jpg" ||
    imageUrl == "ISLANDS.jpg"
  ) {
    imageUrl = "UNKNOWN.png";
  }
  /* if (fileExists(charImg(`./${imageUrl}`))) {
    console.log("fileExists: ", `hte file : ${charImg(`/${imageUrl}`)} existe`);
  } else {
    console.log(
      "fileExists: ",
      `hte file : ${charImg(`./${imageUrl}`)} no existe`
    );
  } */
  /*   let setImagen = (imageUrl) => {
    console.log(" entro imgUrl: ", imageUrl);
    if (fileExists(charImg(`./${imageUrl}`))) {
      console.log("existe", "siiii");
      return `
        <img
          src={charImg("./${imageUrl}")}
          className="imagen"
          alt="${house.region}"}
        />`;
    } else {
      console.log("existe", "Nooooo");
      return `
        <img
          src={charImg("./NO AVAILABLE.jpg")}
          className="imagen"
          alt={"${house.region}"}
        />
      `;
    }
  }; */
  //console.log("setImage", setImagen);
  //imageUrl = "VALE.jpg";
  return (
    <div className="panel panel-primary text-bg-dark p-3  align-items-start">
      <div className="panel-heading house-header">
        <h5>{name}</h5>
      </div>

      <div className="panel-body house-body">
        <div className="left-side">
          <div className="escudo">
            <img
              src={charEsc(`./${EscUrl}`)}
              className="esc-image"
              alt={"${house.region}"}
            />
          </div>
        </div>
        <div className="center-side">
          <p2 className=" black-p">
            <b className=" black-p">Region: </b>
            {region} <br />
          </p2>
          <p2 className=" black-p">
            <b className=" black-p">Words: </b>
            {words} <br />
          </p2>
          <p2 className=" black-p">
            <b className=" black-p">Coat Of Arms:</b>
            {coatOfArms} <br />
          </p2>
          <p2 className=" black-p">
            <b className=" black-p">Current Lord: </b>
            {names.lord} <br />
          </p2>
          <p2 className=" black-p">
            <b className=" black-p">Heir: </b>
            {names.heir} <br />
          </p2>
          <p2 className=" black-p">
            <b className=" black-p">Founded: </b>
            {founded} <br />
          </p2>
          <p2 className=" black-p">
            <b className=" black-p">Founder: </b>
            {name.founder} <br />
          </p2>
          <p2 className=" black-p">
            <b className=" black-p">DiedOut: </b>
            {diedOut} <br />
          </p2>
        </div>
        <div className="right-side">
          <div>
            <p2 className=" black-p">Location:</p2>
          </div>
          <div className="image region">
            <img
              src={charImg(`./${imageUrl}`)}
              className="imagen"
              alt={"${house.region}"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
