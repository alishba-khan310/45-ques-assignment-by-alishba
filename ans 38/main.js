"use strict";
function describe_city(city = "string", country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
// Calling the function with default country name
describe_city("Karachi");
describe_city("Multan");
// Calling the function  which is not the city of default country
describe_city("Istanbul", "Turkey");
