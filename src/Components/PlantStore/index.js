import { SeedData } from "./SeedData";

const plants = [];
const plantActivity = [];

const getPlants = () => {
  return plants.slice();
};

const getActivityHistory = () => {
  return plantActivity.slice();
}

const getPlant = plantId => {
  return getPlants().find(p => {
    return p.id === plantId;
  });
};

const getPlantHistory = (plantId) => {
  return getActivityHistory().filter(a => {
    return a.plantId === plantId;
  });
};

const seedTestData = () => {
  SeedData(plants, plantActivity);
}

export { getPlants, getPlant, getPlantHistory, seedTestData };
