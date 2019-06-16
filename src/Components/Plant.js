import React, { useEffect, useState } from "react";
import { getPlant } from "./PlantStore";
import { withRouter } from "react-router";

const Plant = props => {
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    setPlant(getPlant(props.match.params.id));
  }, [props.match.params.id]);

  return (
    <div>
      {plant ? (
        <React.Fragment>
          <p>{plant.name}</p>
          {plant.id}
        </React.Fragment>
      ) : (
        <div>You are out of green</div>
      )}
    </div>
  );
};

export default withRouter(Plant);
