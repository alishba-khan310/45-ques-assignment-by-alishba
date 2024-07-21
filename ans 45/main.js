"use strict";
function createCar(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
let mycar = createCar("Toyota", "Corolla", { color: "Silver", year: "2024" });
console.log(mycar);
