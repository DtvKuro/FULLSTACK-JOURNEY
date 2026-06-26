import express from "express";

const app = express();
const port = 3000
const today = new Date();
const dayNum = today.getDay();
let DayWeek;

if (dayNum == 0 || dayNum == 6){
  DayWeek = "weekend";  
}else{
  DayWeek = "weekday";
}

app.get("/", (req, res)=>{
  res.render("index.ejs", 
  {Day: DayWeek} 
  
);
console.log(dayNum);
});


app.listen(port, () => {
  console.log(`Server is running on Port:${port}.`);
});



