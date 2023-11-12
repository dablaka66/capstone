import React, { Component, useEffect, useState } from "react";
import getHouses from "../services/getHouses";
import HouseComponent from "../components/HouseComponent";
const initialHouse = {
  name: "pending",
  region: "pending",
  coatOfArms: "Pending",
};

export default function HousesPage() {
  const [houses, setHouses] = useState([initialHouse]);
  const [page, setpage] = useState(1);
  const [size, setsize] = useState(10);
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
