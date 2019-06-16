import React from "react";
import { getPlants } from "./PlantStore";

const allPlants = getPlants().map(plant => {
  return <div key={plant.name}>{plant.name}</div>;
});

const PlantList = () => {
  return <div>Plant List {allPlants}</div>;
};

export default PlantList;
