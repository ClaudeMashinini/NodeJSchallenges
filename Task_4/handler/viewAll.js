const express = require("express");
const app = express();
const parser = require("body-parser");
const Visitors = require("../models/userModel");

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

const viewAll = (req, res) => {
  Visitors.find((err, prospects) => {
    res.send(`${prospects}`);
  });
};

module.exports = viewAll;
