import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 5500;

app.use(express.static("public"));
app.use(express.json());

app.get("/profile", (req, res) => {
  res.render("profile.ejs",{name:"Alex",email:"joy@123",yos:"1st Year",major:"CSE"});
});
app.get("/home", (req, res) => {
  res.render("bt.ejs",{fname:"Joyal",num:1});
});
app.get("/schedule", (req, res) => {
  res.render("scheduled.ejs",{});
});
app.post("/receive-object",(req,res)=>{
  console.log(req.body);
});
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}/`);
});
