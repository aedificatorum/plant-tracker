import React, { useState } from "react";
import { getPlants } from "./PlantStore";
import { Link } from "react-router-dom";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const PlantList = () => {
  const [watered, setWatered] = useState(false);

  const dailyWater = getPlants().filter(plant => {
    return plant.water === 'daily'
  })



  const allPlants = getPlants().map(plant => {
    return (
      <div key={plant.name}>
        <Link to={`plant/${plant.id}`}>
          <div css={tw`md:flex p-12`}>
            <div css={tw`md:flex-shrink-0`}>
              <img css={tw`rounded-lg md:w-56`} src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-slaurentii_terracotta_4_1024x1024.jpg?v=1537308389" alt="Snake plant" />
            </div>
            <div css={tw`mt-4 md:mt-0 md:ml-6 align-middle`}>
              <div css={tw`uppercase tracking-wide text-sm text-indigo-600 font-bold`}>{plant.nickname}</div>
              <div href="#" css={tw`block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline`}>{plant.water}</div>
              <p css={tw`mt-2 text-gray-600`}>{plant.name}</p>
              <div>{dailyWater ? (<p>Did you water me today?</p>) : ('')}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <div css={tw`pt-6 pl-12 text-3xl`}>My garden</div>
      <div>
        {allPlants}
      </div>
    </div>
  );
};

export default PlantList;
