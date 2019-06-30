const plants = [
  {
    id: "stampy",
    name: 'Sansevieria trifasciata',
    nickname: "Stampy",
    purchased: "May 2019",
    light: "indirect",
    water: "daily",
    img: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-slaurentii_terracotta_4_1024x1024.jpg?v=1537308389" 
  },
  {
    id: "cactus",
    name: 'Sansevieria trifasciata',
    nickname: "Cactus",
    purchased: "May 2019",
    light: "indirect",
    water: "daily",
    img: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-slaurentii_terracotta_4_1024x1024.jpg?v=1537308389" 
  }
];

const activityHistory = [
  {
    plantId: "stampy",
    activityDate: new Date(),
    activityType: "Water"
  },
  {
    plantId: "stampy",
    activityDate: new Date(),
    activityType: "Fertilize"
  }
];

const getPlants = () => {
  return plants;
};

const getPlant = plantId => {
  return getPlants().find(p => {
    return p.id === plantId;
  });
};

const getPlantHistory = plantId => {
  return activityHistory.filter(p => {
    return p.plantId === plantId; 
  });
};

export { getPlants, getPlant, getPlantHistory };
