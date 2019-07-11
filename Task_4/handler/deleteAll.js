const express = require("express");
const app = express();
const parser = require("body-parser");
const Visitors = require("../models/userModel");

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

const deleteAll = (req, res) => {
  Visitors.deleteMany((err, prospects) => {
    res.send("All prospects deleted");
  });
};

module.exports = deleteAll;
