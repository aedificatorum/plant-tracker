import React, { useEffect, useState } from "react";
import { getPlant } from "./PlantStore";

const Plant = props => {
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    setPlant(getPlant(props.match.params.id));
  }, [props.match.params.id]);

  return (
    <React.Fragment>
      {plant ? (
        <div>
          <p>{plant.name}</p>
          <p>{plant.id}</p>
          <p>{plant.purchased}</p>
          <p>{plant.light}</p>
          <p>{plant.water}</p>
        </div>
      ) : (
        <div>You are out of green</div>
      )}
    </React.Fragment>
  );
};

export default Plant;
