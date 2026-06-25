
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const truePassword = "ILoveProgramming";

function passwordChecker (req,res,next){
  if (req.body["password"] === truePassword){
    next();
  }
  else{
    res.redirect("/");
  }
}

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/public/index.html")
}); 

app.use(passwordChecker);

app.post("/check", (req, res) => {
  res.sendFile(__dirname + "/public/secret.html");
});

app.listen(port, () =>{
  console.log(`Port is listening at ${port}.`);
});