import express from "express";

const app = express();
const port = 3000;
const publicPath = new URL('./public', import.meta.url).pathname;

app.use(express.static(publicPath));
app.use(express.urlencoded({extended: true}))


app.get("/", (req, res) => {
  //res.render("index.ejs");
})

app.listen(port, () =>{
  console.log(`Server is running on port:${port}.`);
})