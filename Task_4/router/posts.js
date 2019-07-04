let express = require("express");
const Post = require("../models/Post");
const direct = express.Router();
const Handler = require("../handler/handler");
const controller = new Handler();

direct.get("/viewAll", (req, res) => {
  controller.viewAll(req, res);
}); //Retrieves all entries

direct.get("/:postId", async (req, res) => {
  controller.viewOne(req, res);
}); //Retrieves an _id-specified entry

direct.post("/addOne", (req, res) => {
  controller.addOne(req, res);
}); //Adds an entry to the prospects database

direct.put("/:postId", async (req, res) => {
  controller.updateOne(req, res);
}); //Updates the information of the entry

direct.delete("/:postId", async (req, res) => {
  controller.deleteOne(req, res);
}); //Deletes a specific entrry using its _id

module.exports = direct;
