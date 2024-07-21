let magicians_names = ["iqra","sister in laws","you","sada","fareha"]

// creating a function to pass the array of magicians
function show_magicians(magicians : string[]){
     magicians.forEach(name=>console.log(name));
}
// call the function to print each magician's names
console.log("Magicians Names:");
show_magicians(magicians_names);