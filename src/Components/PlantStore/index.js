const getPlants = () => {
  return [
    {
      id: "superid",
      name: "Stampy",
      purchased: "May 2019",
      light: "indirect",
      water: "whenever you think about it",
      photo: "src img" 
    }
  ];
};

const getPlant = id => {
  return getPlants().find(p => {
    return p.id === id;
  });
};

export { getPlants, getPlant };
