const express = require("express");
const app = express();
const parser = require("body-parser");
const Visitors = require("../models/userModel");

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

const deleteOne = (req, res) => {
  Visitors.findByIdAndRemove({ _id: req.params.id }).then(function(prospects) {
    res.send("Prospect deleted");
  });
};

module.exports = deleteOne;
