import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index.ejs",{});
});
app.get("/profile", (req, res) => {
  res.render("profile.ejs",{name:"Alex",email:"joy@123",yos:"2nd Year",major:"CSE"});
});
app.get("/home", (req, res) => {
  res.render("bt.ejs",{fname:"Joyal",num:1});
});
app.get("/schedule", (req, res) => {
  res.render("scheduled.ejs",{});
});
app.get("/planned", (req, res) => {
  res.render("planned.ejs",{});
});
app.post("/receive-object",(req,res)=>{
  console.log(req.body);
});
app.post("/post-query",(req,res)=>{
  console.log(req.body);
  const obj=[{name : "Alex",
    year:"1st Year",
    major:"CSE",
    interests:["C++","C"]
  },{name : "Alex",
  year:"2nd Year",
  major:"MCE",
  interests:["C++","Python"]
}]
  res.json(obj);
})
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}/`);
});
