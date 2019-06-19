import React, { useEffect, useState } from "react";
import { getPlant } from "./PlantStore";
import tw from "tailwind.macro";
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
        <div css={tw`flex`}>
          <div css={tw`w-1/2 w-3/12 m-12`}>
            <img src={plant.img} alt={plant.nickname}></img>
          </div>
          <div css={tw`w-1/2 m-12`}>
            <h1 css={tw`text-4xl text-green-400 font-bold`}>{plant.nickname}</h1>
            <p>My scientific name is {plant.name}</p>
            <p>I was purchased in {plant.purchased}</p>
            <p>I love {plant.light} sunlight</p>
            <p>You need to water me {plant.water}</p>
          </div>
        </div>
      ) : (
        <div>You are out of green</div>
      )}
    </React.Fragment>
  );
};

export default Plant;
