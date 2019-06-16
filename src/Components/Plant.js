import React from "react";
import { getPlants } from "./PlantStore";
import { withRouter } from "react-router";

const Plant = props => {
  const plant = getPlants().find(p => {
    return p.id === props.match.params.id;
  });

  return (
    <div>
      <p>{plant.name}</p>
      {plant.id}
    </div>
  );
};

export default withRouter(Plant);
