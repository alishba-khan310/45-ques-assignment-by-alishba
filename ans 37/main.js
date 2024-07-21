"use strict";
// large shirts
function make_shirt(size = "Large", printMessaga = "Aa Collection") {
    console.log(`shirt size is ${size}, by ${printMessaga}`);
}
// Calling a function with Default values
make_shirt();
// Calling a function with medium size and default values
make_shirt("Medium");
// Calling a function with different size and differnet values
make_shirt("Small", "the visionary");
