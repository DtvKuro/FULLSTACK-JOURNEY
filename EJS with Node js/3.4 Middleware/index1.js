import express from "express";

import { dirname } from "path"; //This three are important in order for user to find the root directory of the project
import { fileURLToPath } from "url"; //You need the file directory for when you are working on cloud and not on Local projects.
const __dirname = dirname(fileURLToPath(import.meta.url)); //This is the conversion of path

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html")
  res.sendFile(__dirname + "/public/index.html");  //it says res.sendFile unlike send. sendFile will allow user to access the file in the directory, which in this case is the HTML.
});

app.post("/submit", (req, res) => {
  console.log(req.body); 
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
