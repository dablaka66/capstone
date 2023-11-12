import React from "react";

export default function getIdCodeFromUrl(texto) {
  if (!texto) return "No available";
  let f = texto.split("/");

  return f[f.length - 1];
}
