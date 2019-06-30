export const SeedData = (plants, plantActivity) => {
    const makePlant = (name) => {
        const plant = {
            id: name,
            name,
            nickname: name,
            purchased: "May 2019",
            light: "indirect",
            water: "daily",
            img: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-slaurentii_terracotta_4_1024x1024.jpg?v=1537308389"
        };
        plants.push(plant);
        return plant;
    }
    
    const makeWater = (plant) => {
        const waterDate = new Date();
        waterDate.setDate(waterDate.getDate() - (Math.random() * 50));
    
        const activity = {
            id: Math.random() * 100000,
            plantId: plant.id,
            activityType: "Water",
            activityDate: waterDate
        };
        plantActivity.push(activity);
        return activity;
    }

    const makeWaterHistory = (plant, times) => {
        for(let i = 0; i < times; i++) {
            makeWater(plant);
        }
    }

    const stampy = makePlant("stampy");
    makeWaterHistory(stampy, 4);

    const stimpy = makePlant("stimpy")
    makeWaterHistory(stimpy, 0);

    const frank = makePlant("frank");
    makeWaterHistory(frank, 25);
};