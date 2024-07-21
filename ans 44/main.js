"use strict";
function makeSandwich(...items) {
    console.log("\nMaking a sandwich with the following items:\n");
    items.forEach(ingredients => console.log("-" + ingredients));
    console.log("\nNow Enjoy Sandwich!");
}
// Call the function 3 times with three different number of arguments
makeSandwich("Bread", "Chicken", "CreamCheese", "Egg");
makeSandwich("Bread", "Boiledchicken", "Mayo", "Cucumber");
makeSandwich("Bread", "Friedchicken", "Mayo", "Lettuce", "Egg", "Cheese");
