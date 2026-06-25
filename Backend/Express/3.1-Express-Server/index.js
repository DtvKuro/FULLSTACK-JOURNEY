import express from "express"; //in order to use express functions
const app = express(); //getting hold of express function as constant variable
const port = 3000; //setting the port that client request to.

//When localhost:3000 is ran it GET'S "/" or root which then executes everything inside this function

app.get("/", (req, res) => { 
  res.send("Hello, World");
});

app.listen(port,()=>{ // 3000 is the port  
console.log(`Server running on port ${port}.`); // Callback
});