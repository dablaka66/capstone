import React from "react";
import axios from "axios";

async function getHouses(page, size) {
  let res = await axios.get(
    `https://www.anapioficeandfire.com/api/houses?${page}&pageSize=${size}`,
    {}
  );
  console.log("res in side gethouses: ", res);
  return res.data;
}

export default getHouses;
