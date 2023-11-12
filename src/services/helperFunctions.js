import React from "react";
import statSync from "react";

export function getLastSubString(texto) {
  if (!texto) return "No available";
  let f = texto.split(" ");

  return f[f.length - 1];
}
export function fileExists(path) {
  //const fs = require("fs");
  try {
    return statSync(path).isFile();
  } catch (e) {
    console.log("fileExiste() error", e);

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
