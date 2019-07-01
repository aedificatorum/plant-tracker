import React, { useEffect, useState } from "react";
import { getPlant, getPlantHistory } from "./PlantStore";
import tw from "tailwind.macro";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import Moment from "react-moment";

const Plant = props => {
  const [plant, setPlant] = useState(null);
  const [plantHistory, setPlantHistory] = useState(null);

  useEffect(() => {
    setPlant(getPlant(props.match.params.id));
  }, [props.match.params.id]);

  useEffect(() => {
    const history = getPlantHistory(props.match.params.id);
    history.sort((a, b) => {return new Date(b.activityDate) - new Date(a.activityDate)});
    setPlantHistory(history);
  }, [props.match.params.id]);

  return (
    <React.Fragment>
      {plant ? (
        <div css={tw`flex`}>
          <div css={tw`w-1/2 w-3/12 m-12`}>
            <img src={plant.img} alt={plant.nickname} />
          </div>
          <div css={tw`w-1/2 m-12`}>
            <h1 css={tw`text-4xl text-green-400 font-bold`}>
              {plant.nickname}
            </h1>
            <p>My scientific name is {plant.name}</p>
            <p>I was purchased in {plant.purchased}</p>
            <p>I love {plant.light} sunlight</p>
            <p>You need to water me {plant.water}</p>
              <ul>
                {plantHistory.slice(0, 5).map((history, i) => {
                  return (
                    <li key={i}>
                      <Moment fromNow>{history.activityDate}</Moment>
                      : {history.activityType}
                    </li>
                  );
                })}
              </ul>
          </div>
        </div>
      ) : (
        <div>You are out of green</div>
      )}
    </React.Fragment>
  );
};

export default Plant;
