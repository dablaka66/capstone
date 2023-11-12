import React from "react";
import getIdCodeFromUrl from "./getIdCodeFromUrl";

export default function setId(arr) {
  let id = "";
  arr.map((c) => {
    id = getIdCodeFromUrl(c.url);
    c = { ...c, id: id };
  });

  return arr;
}
