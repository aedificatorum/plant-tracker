import React, { useEffect, useState } from "react";
import { getPlant } from "./PlantStore";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const Plant = props => {
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    setPlant(getPlant(props.match.params.id));
  }, [props.match.params.id]);

  return (
    <React.Fragment>
      {plant ? (
        <div css={tw`flex mb-4`}>
        <div css={tw`w-1/2 h-50 w-50`}><img src={plant.img} /></div>
        <div css={tw`w-1/2`}>
          <p>{plant.name}</p>
          <p>{plant.id}</p>
          <p>{plant.purchased}</p>
          <p>{plant.light}</p>
          <p>{plant.water}</p>
        </div>
      </div>
      ) : (
        <div>You are out of green</div>
      )}
    </React.Fragment>
  );
};

export default Plant;
