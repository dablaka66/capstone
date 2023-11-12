import React from "react";
import axios from "axios";
import setId from "./SetId";

export default async function getCharacters(page, size) {
  try {
    let res = await axios.get(
      `https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${size}`,
      {}
    );
    return res.data;
  } catch (err) {
    console.log("err: ", err);
    return err;
  }
}
