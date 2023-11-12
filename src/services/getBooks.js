import React from "react";
import axios from "axios";

async function getBooks(book) {
  let res = await axios.get(
    `https://www.anapioficeandfire.com/api/books/${book}`,
    {}
  );
  return res.data;
}

export default getBooks;
