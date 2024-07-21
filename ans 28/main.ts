//Stages of Life
// if-else chain

let personAge = 19;

//If the person is less than 2 years old
if(personAge <2){
console.log("You are a Baby.");
}

//If the person is at least 2 years old but less than 4
else if(personAge>=2 && personAge<4){
console.log("You are a Toddler.");
}

//If the person is at least 4 years old but less than 13
else if (personAge>=4 && personAge<13){
    console.log("You are a kid.");
}

//If the person is at least 13 years old but less than 20
else if (personAge>=13 && personAge<20){
    console.log("You are a Teenager.");
}

//If the person is at least 20 years old but less than 65
else if(personAge>=20 && personAge<65){
    console.log("YOu are an Adult.");
}

//If the person is age 65 or older
else if(personAge>=65){
    console.log("You are an elder.");
}
