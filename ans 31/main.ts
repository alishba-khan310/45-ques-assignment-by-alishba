let username=["admin","selin","maria","afifa","Elsa"]
// username[]
if(username.length === 0){
console.log("Your Array is empty we need to find some users!");
}
else{

// Using foreach loop on Array

username.forEach(oneUser=>{
    if(oneUser === "admin"){
     console.log(`Hello ${oneUser}, would you like to see a status report?`);
     }
     else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
        
     }
})
    }