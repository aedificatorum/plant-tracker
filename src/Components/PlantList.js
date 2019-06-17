import React from "react";
import { getPlants } from "./PlantStore";
import { Link } from "react-router-dom";

const PlantList = () => {
  const allPlants = getPlants().map(plant => {
    return (
      <div key={plant.name}>
        <Link to={`plant/${plant.id}`}>{plant.name}</Link>
      </div>
    );
  });

  return (
    <div>
      Plant List
      {allPlants}
    </div>
  );
};

export default PlantList;
