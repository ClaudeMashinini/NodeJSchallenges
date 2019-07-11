const express = require("express");
const app = express();
const parser = require("body-parser");
const Visitors = require("../models/userModel");

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

const viewOne = (req, res) => {
  Visitors.find({ _id: req.params.id }).then(function(prospects) {
    res.send(prospects);
  });
};

module.exports = viewOne;
