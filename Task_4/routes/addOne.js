const express = require("express");
const direct = express.Router();
const addOne = require("../handler/addOne");

direct.post("/prospects/visitors/addOne", addOne);

module.exports = direct;
