let usernames =["ahsan","alishba","javeria","admin","waniya"];

// Using foreach loop on Array
usernames.forEach(oneUser=>
   {
    if(oneUser === "admin"){
     console.log(`Hello ${oneUser}, would you like to see a status report?`);
     }
     else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
        
     }
})
