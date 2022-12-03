let fs = require("fs");
let text = fs.readFileSync("./input.txt").toString("utf-8");
let textByLine = text.split("\n");
let maxCalories = 0;
let currentCalories = 0;

textByLine.forEach((calories, index) => {
  if (calories != "") {
    calories = parseInt(calories);
    currentCalories += calories;
  } else {
    if (currentCalories > maxCalories) {
      maxCalories = currentCalories;
    }
    currentCalories = 0;
  }
});

console.log("Part 1:", maxCalories);

let maxCaloriesArray = [0, 0, 0];
textByLine.forEach((calories, index) => {
  if (calories != "") {
    calories = parseInt(calories);
    currentCalories += calories;
  } else {
    if (currentCalories > maxCaloriesArray[0]) {
      maxCaloriesArray[0] = currentCalories;
      maxCaloriesArray.sort();
    }
    currentCalories = 0;
  }
});

let top3 = 0;
maxCaloriesArray.forEach((food) => {
  top3 += food;
});

console.log(top3);
