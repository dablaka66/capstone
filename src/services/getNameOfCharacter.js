import React from "react";
import getOneCharacter from "./getOneCharecter";
import getIdCodeFromUrl from "./getIdCodeFromUrl";

export default async function getNameOfCharacter(characterUrl) {
  try {
    if (characterUrl.length !== 0) {
      let name = await getOneCharacter(getIdCodeFromUrl(characterUrl));
      return name.name;
    } else {
      return "No Url available";
    }
  } catch (err) {
    console.log("err: ", err);
    return err;
  }
}
