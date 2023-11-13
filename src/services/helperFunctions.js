import React from "react";
import statSync from "react";

export function getLastSubString(texto) {
  if (!texto) return "No available";
  let f = texto.split(" ");

  return f[f.length - 1];
}
export function fileExists(path) {
  //const fs = require("fs");
  //console.log("statSync(path).isFile()", statSync(path).isFile());
  try {
    console.log("statSync(path).isFile()", statSync(path).isFile());
    return statSync(path).isFile();
  } catch (e) {
    console.log("fileExiste() Error", e);

    return false;
  }
}
export function hasRegion(region) {
  if (region !== "pending") {
    //imageUrl = getMainOnesData(name);looking image from web
    //console.log("house.region: ", region);
    let imageUrl;
    //console.log("getlLastSubstring: ", getLastSubString(region));
    imageUrl = getLastSubString(region).toUpperCase() + ".jpg";
    console.log("imageUrl inside if de pending : ", imageUrl);
    return imageUrl;
  } else {
    return (
      <div>
        <h4>no available yet</h4>
      </div>
    );
  }
}

export function getEscImg(nameEsc) {
  console.log("nameEsc: ", nameEsc);

  let name = "";
  if (!nameEsc) return "ESCNoavailable.png";
  let f = nameEsc.split(" ");
  if (nameEsc.length == 1) return "ESCNoavailable.png";
  console.log("f: ", f);

  for (let w = 1; w < f.length; w++) {
    name = name + f[w];
  }
  console.log("esc file name", name);
  return name;
}
