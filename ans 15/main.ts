// replacing aisha with new friend sana

let friends = ["waniya", "aisha", "javeria"];
for (let friend of friends) {
    let message = `dear ${friend} you're invited at dinner`;
    const newFriend = (friends.splice(1,1,"sana"));
    console.log(message);
}
