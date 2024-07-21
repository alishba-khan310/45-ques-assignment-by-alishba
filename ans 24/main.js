"use strict";
//Tests for equality and inequality with strings
//false
let myName = "alishba";
let hisName = "ahsan";
console.log(myName == hisName);
//true
let he = "ahsan";
let myFavoriteName = "ahsan";
console.log(he == myFavoriteName);
//Tests using the lower case function
//false
let book = "mylife";
let book2 = "MYLIFE";
console.log(book == book2);
//true
let mybook = "wonderingday";
let mybook2 = "wonderingday";
console.log(mybook == mybook2);
//Numerical tests involving equality and inequality,
// greater than and less than, greater than or equal to, 
//and less than or equal to.
let num1 = 5;
let num2 = 10;
// equality 
console.log(num1 == num2);
//inequality
console.log(num1 != num2);
//greater than 
console.log(num1 > num2);
//less than
console.log(num1 < num2);
//greater than or equal to
console.log(num1 >= num2);
//less than or equal to
console.log(num1 <= num2);
//Tests using "and" and "or" operators
//LOGICL OPERATORS
//AND(&&): all conditions should be true
let value = 3;
//true
console.log(3 > 0 && 3 > 2);
//false
console.log(3 < 0 && 3 < 5);
//OR(||): atleast one is true. so, it would be true otherwise, false
let value2 = 10;
//true
console.log(5 > 10 || 5 < 10);
//false
console.log(10 < 5 || 10 > 20);
//Test whether an item is in a array
let home = ["sharifabad", "husainabad"];
console.log("Is karimabad is include in my seasons array?");
console.log(home.includes("karimabad"));
// Test whether an item is not in an array
console.log("Is karimabad is not include in my seasons array?");
console.log(!home.includes("karimabad"));
