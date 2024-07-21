"use strict";
let magicians_names = ["iqra", "sister in laws", "you", "sada", "fareha"];
// creating a function to pass the array of magicians
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// creating a function to add "The great" before magicians names
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let great_magicians = make_great(magicians_names);
console.log("The Great Magicians:\n");
show_magicians(great_magicians);
