const getPlants = () => {
  return [
    {
      id: "superid",
      name: "Stampy"
    }
  ];
};

const getPlant = id => {
  return getPlants().find(p => {
    return p.id === id;
  });
};

export { getPlants, getPlant };
