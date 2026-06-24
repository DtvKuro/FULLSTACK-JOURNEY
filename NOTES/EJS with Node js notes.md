Express is a JS Framework which is used for backend
and Node is a runtime environment that allows Javascript be used on the pc itself.
Instead of just being in a website.

Express + Node = Full

Express allows us to use JS and Node much faster and easier.

Creating the server side using express and node. As in the application which the server calls out.
The application will be done using Express + Node.

Localhost is server hosted locally making our computer the server of website

localhost:portnumber

port is a door in a computer with number.

once you set the server to listen to that port, when we access localhost.
Its gonna look in the computer for portnumber, then through that port it can find the application thats listening and ready to respond to any request like sending HTML, CSS or JS.

A Server has alot of ports(or a door in this case) is because the server must take multiple amounts of request without interfering with each other.

HTTP - Hyper Text Transfer Protocol

is a language that allows computers to connect to other computer.

Request Vocab

GET - Request resource (HTML,CSS, JS, etc.)
POST - Sending resource to the server (User's Input to the server)
UPDATING{
PUT - Replacing resource.
PATCH - Patch up a resource. // specific resource that wants to be sent or replaced.
}
DELETE - Deletes resource from DB, client, or server.

CREATING A SERVER.

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

HOW TO KILL A SERVER

You first have to find it with this:
netstat -ano | findstr :portnum
Then you find the PID then write it here
taskkill /PID PIDHere /F <This is for terminal use>
taskkill -PID 8828 -F <This also works and its short>
taskkill //PID 8828 //F <This is for GitBash Terminal>

/Endpoint - where you want something to go.

app.get("/", (req, res) => { //In here you are targeting the root which is / equivalent to "localhot:3001/"
res.send("Hello, World");
});

you can do more like this

    app.get("/about", (req, res) => { //which would be "localhost:3001/about"
    res.send("Hello, World");

});

POSTMAN - HOW TO MAKE REQUEST.

Client-Side Server-Side.
------->Request  
CLIENT >--------HTTP----------> DATABASE > SERVER > APPLICATION
Response<-------

HTTP Response status

Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)

What if you wanna work on backend first so you can test it and pass it to frontend.

You can use POSTMAN.

Postman Practice - Testing Different Routes:

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //You Are Sending a DATA.
  res.sendStatus(201); //201 means resource was created
});

app.put("/user/angela", (req, res) => { //Put will replace all of data in angela rather than just updating the outdated one
  res.sendStatus(200);                  //So you have to fetch data first, and have to put all updated info before PUT
});

app.patch("/user/angela", (req, res) => { // You can change a single thing in the data.
  res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => { //It will delete the data.
  res.sendStatus(200);
});

sendStatus(code) - sends just the HTTP status code as the response (e.g. 200, 201).
PUT replaces ALL data so you need to send everything. PATCH only updates what you specify.

MIDDLEWARE

Server ---> Middleware ----> GET, PUT, POST, PATCH, DELETE

Middleware can be used for the following:

preprocess the request - middleware can change modify the request before it comes to final route.
logging the request - request time, what type of request, request status.
Authentication - it can check if the request came from client that is authorized.
Identify Errors - before it goes to the handler.

Example of middleware is body-parser
Body-parses is already in the Express Library.

which can be accessed like this:

app.use(express.urlencoded({ extended: true }));

Example of parse.

//Action is the route that i want the server to handle

<form action ="/login" method="POST"> //Method is how i want the data to be processed. 
    <label for="email">Email</label>//label where we label the next input.
    <input type="text" name="email" required>//input has type and name which is what the user inputted. //And then required where the input cannot be submitted if theres no data inputted.
    <label for="password">Password</label>
    <input type="text" name="password" required>
    <input type="submit" value="Submit"> //Submit type which is typically a button.
</form>

Make a public folder in the project and thats where the static files likes HTML, CSS, Images, things that dont need to change.

Getting the root directory (important for cloud projects, not just local):

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); //converts the file URL to an actual directory path

res.sendFile vs res.send:

res.send("text") - sends text/HTML as the response.
res.sendFile(__dirname + "/public/index.html") - sends an actual file from the directory as the response.

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body); //req.body contains the data sent from the form (parsed by body-parser/urlencoded middleware)
});
