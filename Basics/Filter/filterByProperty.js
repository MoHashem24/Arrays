// Filter animals that can fly
const animals = [
    { name: "Eagle", canFly: true },
    { name: "Penguin", canFly: false },
    { name: "Sparrow", canFly: true },
    { name: "Ostrich", canFly: false },
    { name: "Parrot", canFly: true }
  ];
  
  const flyingAnimals = animals.filter(animal => animal.canFly);
  
  console.log("All Animals:", animals);
  /**
   * All Animals: [
   *   { name: "Eagle", canFly: true },
   *   { name: "Penguin", canFly: false },
   *   { name: "Sparrow", canFly: true },
   *   { name: "Ostrich", canFly: false },
   *   { name: "Parrot", canFly: true }
   * ]
   */
  
  console.log("Flying Animals:", flyingAnimals); 
  // Flying Animals: [{ name: "Eagle", canFly: true }, { name: "Sparrow", canFly: true }, { name: "Parrot", canFly: true }]
  