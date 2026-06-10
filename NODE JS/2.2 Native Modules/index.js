const fs = require("fs"); //allows us to access Node js

//Creating a file using Node js

fs.writeFile("message.txt", "Hello from Cy", (err) => {
  if (err) throw (err);
  console.log("File has been saved.");
}); //run by "node index.js"


//Reading the file from path

//readFile(path, option, (err, data) )
fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});// run through "node index.js"