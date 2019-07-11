const express = require("express");
const direct = express.Router();
const deleteId = require("../handler/deleteById");

direct.delete("/prospects/visitors/:id", deleteId);

module.exports = direct;
