const getPlants = () => {
  return [
    {
      id: "superid",
      name: 'Sansevieria trifasciata',
      nickname: "Stampy",
      purchased: "May 2019",
      light: "indirect",
      water: "whenever you think about it",
      img: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-slaurentii_terracotta_4_1024x1024.jpg?v=1537308389" 
    }
  ];
};

const getPlant = id => {
  return getPlants().find(p => {
    return p.id === id;
  });
};

export { getPlants, getPlant };
