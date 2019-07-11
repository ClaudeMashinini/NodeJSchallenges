const express = require("express");
const direct = express.Router();
const viewAll = require("../handler/viewAll");

direct.get("/prospects/visitors/viewAll", viewAll);

module.exports = direct;
