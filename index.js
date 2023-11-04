import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.render("test.ejs",{});
});
app.get("/test", (req, res) => {
  res.render("test2.ejs",{});
});
app.post("/new_elt",(req,res)=>{
  console.log(req.body);
  res.render("scheduled.ejs",{});
});
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}/`);
});
