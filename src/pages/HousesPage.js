import React, { Component, useEffect, useState } from "react";
import getHouses from "../services/getHouses";
import HouseComponent from "../components/HouseComponent";
const initialHouse = {
  name: "pending",
  region: "pending",
  coatOfArms: "Pending",
};

export default function HousesPage() {
  const [houses, setHouses] = useState([]); //I took out initialHouse to test
  const [page, setpage] = useState(1);
  const [size, setsize] = useState(20);
  /* const houses = () => {
    return getHouses(1, 10);
  }; */
  const manaclick = () => {
    houses();
  };

  useEffect(() => {
    getmoreHouses();
  }, []);

  const getmoreHouses = () => {
    getHouses(page, size).then((newHouses) => {
      setHouses(newHouses);
      console.log("newHouses: ", newHouses);
    });
  };
  houses.map((h) => {
    console.log("c", h);
  });
  return (
    <div className="panel-group row">
      <h2>Houses:</h2>
      {houses.map((h) => {
        return <HouseComponent house={h} />;
      })}
      <button onClick={manaclick}>click me </button>
    </div>
  );
}
