"use strict";
let current_users = ["ahsan", "alishba", "sana", "anusha", "iqra"];
// Array of new users
let new_users = ["javeria", "elsa", "Ahsan", "alishba", "waniya"];
// loop through new_users to check for usernames availability
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser}, this yousername is already assign `);
    }
    else {
        console.log(`${newUser},this name is available`);
    }
});
