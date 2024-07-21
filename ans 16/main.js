"use strict";
//adding new friend sana and removing aisha
//by using for loop and splice method
let friends = ["waniya", "aisha", "javeria"];
for (let friend of friends) {
    const newFriend = friends.splice(1, 1, "sana");
    console.log(friend);
}
// giving msg to current invited friend 
let broaderDinnerMsg = "great news, now we have a big dinner table, so i'm inviting 3 more friends to join us.";
console.log(broaderDinnerMsg);
// adding one more friend at beginig
friends.unshift("maryam");
// adding one more guest at the middle of the array
let middleGuest = "tayyaba";
let middleIndex = friends.length / 2;
friends.splice(middleIndex, 0, middleGuest);
// adding one more guest at the end array
friends.push("saika");
// more new friend names
let moreFriends = ["mariyam", "tayyaba", "saika"];
console.log(moreFriends);
for (let friend of friends) {
    let message = `dear ${friend} you're invited at dinner`;
    console.log(message);
}
