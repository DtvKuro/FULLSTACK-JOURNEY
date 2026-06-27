From Submitting "name" with app.post

how do we get the "name" from the app.post
into a new html, using the name in it?

That is done using Templating.

Tho we can do it via res.send("coding");
but if the code is already complex page of html then its gonna be clustered, making the js file full with HTML.

Separation of Concern
Frontend Backend
CSS (Style) |
HTML(Structure) | JS(Functionality)

In order to separate them both we can use Templating Language,
or "EJS"

Embedded Javascript - EJS

Back to the problem, we can use EJS to render data from user using

app.post("/", (req, res)=>{
res.render("index.ejs", //here
{ name: req.body["name"]} //This is how you pass on the file from frontend to backend then back to frontend.
); //to here
});

Then in EJS we can do

<body>
  <h1>
    Hello <%=name %> //the name in here shoulde match the "name:" from js because theyre one. Its like var name; then using name.
  </h1>
</body>

---

SETUP

npm i ejs express

EJS files go inside a views/ folder. Express automatically looks there.

project/
├── index.js
├── package.json
└── views/
└── index.ejs

You dont need app.set("view engine", "ejs") or anything, express just knows to look in views/.

BUT theres a difference:

- If you DO set app.set("view engine", "ejs"), you can write res.render("index") without the extension.
- If you DONT set it, you have to write res.render("index.ejs") with the full extension.

Express auto-detects the engine from the file extension, so the config is just a convenience to skip typing ".ejs" every time. Thats literally it.

---

res.render vs res.send vs res.sendFile

res.send("text") - sends raw text or HTML string.
res.sendFile(\_\_dirname + "/public/index.html") - sends an actual file.
res.render("index.ejs", { data }) - renders an EJS template and passes data to it.

render is specifically for templating. You use it when you need to inject backend data into the page.

HOW res.render PASSES DATA

res.render("index.ejs", {
newVarForEJS: theVarInJS
});

the left side (key) is the variable name that EJS will use.
the right side (value) is the actual data from your JS server.

so if you do { Day: DayWeek }, inside ejs you use <%= Day %> not <%= DayWeek %>.
the ejs file doesnt know DayWeek exists. it only knows what you gave it through that object.

you can pass multiple:

res.render("index.ejs", {
Day: DayWeek,
name: "Japs",
age: 20
});

WHY views/ FOLDER

when you do res.render("index.ejs"), express internally looks for views/index.ejs.
you didnt configure this. its just express's default folder for templates.
so your .ejs files MUST be inside views/ or express wont find them.

---

PASSING SERVER-SIDE LOGIC TO EJS

You can compute stuff in your server first then just pass the result.

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
{Day: DayWeek} //passing the computed result, not the raw number
);
});

EJS just receives the final value. It doesnt care how you got it.

---

LOGIC IN EJS VS SERVER

You can write logic in either place. Both work.

Server-side (index.js) - for heavy stuff like DB queries, API calls, auth, computation.
EJS side (.ejs file) - for simple display logic like showing/hiding elements, if/else for what to render.

In the 4.0 project the day check was done both server-side AND in ejs. Either works but doing it server-side keeps the template cleaner. EJS should mostly just display, not compute.

EJS Tags

<%= variable %> JS Output, it can output the variables from backend as a text in the HTML.
<% console.log("Hello") %> JS Execute, This is not visible in the page and runs in the backend.
<%- <h1> Hello </h1> %> Render HTML, This is used for when the variable from backend has HTML tags, you can display the variable as pure text in HTML.
<% % % %> Shows the <% and %>, This is used for when making a website teaching about EJS and you need to show the EJS tags.
<%# %> Comment, Everything inside is not read.
<%- include("file.ejs") %> Insert another EJS File.

PASSING DATA TO EJS TEMPLATE

Passing data from server to cliend and client to server.

Server to EJS is done
via: res.render(index.ejs, newVar = var) then <%= newVar %>
