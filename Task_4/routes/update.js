const express = require("express");
const direct = express.Router();
const updateId = require("../handler/update");

direct.put("/prospects/visitors/:id", updateId);

module.exports = direct;
