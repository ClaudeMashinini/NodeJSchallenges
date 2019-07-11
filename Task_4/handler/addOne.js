const express = require("express");
const app = express();
const parser = require("body-parser");
const Visitors = require("../models/userModel");

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

const createVisitor = (req, res, next) => {
  Visitors.find((err, prospects) => {
    const processor = new Visitors(req.body);
    processor.save();
    res.send("Prospect created and inserted into visitors database");
  });
};

module.exports = createVisitor;
