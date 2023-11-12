import React from "react";
import mainones from "./mainones";

export default function getLocalImage(name, type) {
  //let base = `./${type}/`;
  //let a = `${base}noAvailable.jpg`;
  let a = "noAvailable.jpg";

  mainones.map((c) => {
    if (c.fullName.trim() == name.trim()) {
      a = c.firstName + "-" + c.lastName + ".jpg";
    }
  });
  return a;
}
