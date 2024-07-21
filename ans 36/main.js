"use strict";
//function
//(we can call the function many times by changing the values!)
function make_shirt(size = "string", printMessage = "string") {
    console.log(`You selected ${size} size shirt, whose title is ${printMessage}`);
}
;
make_shirt("medium", "Aa collection");
