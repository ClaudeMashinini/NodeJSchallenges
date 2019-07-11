const express = require("express");
const direct = express.Router();
const deleteAll = require("../handler/deleteAll");

direct.delete("/prospects/visitors/deleteAll", deleteAll);

module.exports = direct;
