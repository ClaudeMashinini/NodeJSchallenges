const express = require("express");
const app = express();
const parser = require("body-parser");
const Visitors = require("../models/userModel");

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

const updateOne = (req, res) => {
  Visitors.findOneAndUpdate({ Name: req.params.id }, req.body, function(
    err,
    prospects
  ) {
    res.send(prospects);
  });
};

module.exports = updateOne;
