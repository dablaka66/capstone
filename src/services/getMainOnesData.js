import React from "react";
import mainones from "./mainones";

export default function getMainOnesData(name) {
  let a =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIizy6A_-zTzo3WRboJBxY01yUw76sLti6cg&usqp=CAU";

  mainones.map((c) => {
    if (c.fullName.trim() == name.trim()) {
      a = c.imageUrl;
    }
  });
  return a;
}
