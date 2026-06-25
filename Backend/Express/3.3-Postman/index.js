import express from "express";
const app = express();
const port = 3000;

// Let’s practice using Postman. Make sure your server is running with nodemon.

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //You Are Sending a DATA.
  res.sendStatus(201);
});

app.put("/user/angela", (req, res) => { //Put will replace all of data in angela rather than just updating the outdated one
  res.sendStatus(200);                  //So you have to fetch data first, and have to put all updated info before PUT
});

app.patch("/user/angela", (req, res) => { // You can change a single thing in the data.
  res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => { //It will delete the data.
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
