import express from "express";
const app = express();
const port = 3000;

app.listen(port,()=>{ // 3000 is the port  
console.log(`Server running on port ${port}.`); // Callback
});