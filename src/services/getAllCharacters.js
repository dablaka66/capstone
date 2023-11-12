import { React, useEffect, useState } from "react";
import axios from "axios";
import setId from "./SetId";
import saveAs from "file-saver";
import filesystem from "file-saver";
import characterData from "../data/charactersData";

export default async function GetAllCharacters() {
  const [allChar, setAllChar] = useState([]);
  useEffect(() => {});

  const a = characterData;

  //saveAs(jsonData, "../data/data.js");
  return <div>{allChar}</div>;
}
