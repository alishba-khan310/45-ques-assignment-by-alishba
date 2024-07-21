var usernames = ["admin", "selin", "maria", "afifa", "Elsa"];
if (usernames.length === 0) {
    console.log("Your Array is empty we need to find some users!");
}
else {
    // Using foreach loop on Array
    usernames.forEach(function (oneUser) {
        if (oneUser === "admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
