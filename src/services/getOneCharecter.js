import React from "react";
import axios from "axios";

export default async function getOneCharacter(id) {
  try {
    let res = await axios.get(
      `https://www.anapioficeandfire.com/api/characters/${id}`,
      {}
    );
    return res.data;
  } catch (err) {
    return err;
  }
}
