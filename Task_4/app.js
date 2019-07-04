const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const routingPosts = require("./router/posts");

app.use(cors());
app.use(bodyParser.json());
app.use("/posts", routingPosts);

mongoose.connect(process.env.p_deets, { useNewUrlParser: true }, () => {
  console.log("ready for liftoff");
});

app.listen(8888, () => {
  console.log("Liftoff");
});
