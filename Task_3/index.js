const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render(__dirname + "/public/pug/index");
});

app.listen(8880, err => {
  if (err) {
    console.log("App is not working.");
  }
  console.log("The weather app is running at port 8880");
});
