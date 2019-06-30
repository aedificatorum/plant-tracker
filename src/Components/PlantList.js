import { React, useState } from "react";
import { getPlants } from "./PlantStore";
import { Link } from "react-router-dom";
import tw from "tailwind.macro";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const PlantList = () => {
  const [watered, setWatered] = useState(false);

  const dailyWater = getPlants().filter(plant => {
    return plant.water === "daily";
  });

  const handleWatering = e => {
    setWatered(true);
  }

  console.log(getPlants().length);

  const allPlants = getPlants().map(plant => {
    return (
      <div key={plant.id} css={tw`w-1/3`}>
        <div css={tw`p-10 flex`}>
          <div css={tw`md:flex-shrink-0`}>
            <img
              css={tw`rounded-lg md:w-56`}
              src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-slaurentii_terracotta_4_1024x1024.jpg?v=1537308389"
              alt="Snake plant"
            />
          </div>
          <div css={tw`mt-4 md:mt-0 md:ml-6 align-middle`}>
            <Link to={`plant/${plant.id}`}>
              <div
                css={tw`uppercase tracking-wide text-sm text-indigo-600 font-bold`}
              >
                {plant.nickname}
              </div>
            </Link>
            <div
              href="#"
              css={tw`block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline`}
            >
              {plant.water}
            </div>
            <p css={tw`mt-2 text-gray-600`}>{plant.name}</p>
            <div>{dailyWater ? <p>Did you water me today?</p> : ""}</div>
            <button
              css={tw`bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full`} onClick={handleWatering}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div css={tw`pt-6 pl-12 text-3xl`}>My garden</div>
      <div css={tw`flex flex-wrap`}>{allPlants}</div>
    </div>
  );
};

export default PlantList;
