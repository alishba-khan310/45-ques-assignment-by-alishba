function makeSandwich(...items:string[]){
    console.log("Making a sandwich with the following items:");
    items.forEach(ingredients=>console.log("-"+ingredients));
    console.log("Now Enjoy Sandwich!");
}
// Call the function 3 times with three different number of arguments
makeSandwich("Bread","Chicken","CreamCheese","Egg");
makeSandwich("Bread","Boiledchicken","Mayo","Cucumber");
makeSandwich("Bread","Friedchicken","tomatto","Mayo","Lettuce","Egg","Cheese");