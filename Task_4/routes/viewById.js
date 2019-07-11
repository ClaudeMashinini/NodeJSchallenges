const express = require("express");
const direct = express.Router();
const viewById = require("../handler/viewById");

direct.get("/prospects/visitors/:id", viewById);

module.exports = direct;
