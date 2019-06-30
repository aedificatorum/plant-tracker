import { SeedData } from "./SeedData";

let logging = false;

const log = (...args) => {
  if(!logging) {
    return;
  }

  console.info(...args);
}

const plants = [];
const plantActivity = [];

const getPlants = () => {
  log("GET PLANTS");

  return plants.slice();
};

const getActivityHistory = () => {
  return plantActivity.slice();
}

const getPlant = plantId => {
    log("GET_PLANT", plantId);

    return getPlants().find(p => {
    return p.id === plantId;
  });
};

const getPlantHistory = (plantId) => {
  log("GET_PLANT_HISTORY", plantId);

  return getActivityHistory().filter(a => {
    return a.plantId === plantId;
  });
};

const seedTestData = () => {
  SeedData(plants, plantActivity);
  logging = true;
}

export { getPlants, getPlant, getPlantHistory, seedTestData };
