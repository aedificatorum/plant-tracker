import React from "react";
import { getPlants } from "./PlantStore";
import { NavLink } from "react-router-dom";

const PlantList = () => {
  const allPlants = getPlants().map(plant => {
    return (
      <div key={plant.name}>
        {/* <NavLink to={`plant/${plant.id}`}>{plant.name}</NavLink> */}
      </div>
    );
  });

  return <div>Plant List {allPlants} 
    {/* <NavLink to='/fuck'>lol</NavLink> */}
    </div>;
};

export default PlantList;
