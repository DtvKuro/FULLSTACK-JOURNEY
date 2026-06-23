import express from "express";
const app = express();
const port = 3001;
  
app.get("/",(req,res)=>{
  res.send("Yoskoso watashi no Soul Society!");
});

app.get("/contact",(req,res)=>{
  res.send("Please call me");
});

app.get("/about",(req,res)=>{
  res.send("I am aspiring Developer");
});

app.listen(port,()=>{
  console.log(`Console is running at ${port}.`);
}); 