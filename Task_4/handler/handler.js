const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

module.exports = function Handler() {
  this.viewAll = async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (error) {
      console.log(error);
    }
  };

  this.addOne = async (req, res) => {
    const post = new Post({
      Name: req.body.Name,
      Surname: req.body.Surname,
      Age: req.body.Age,
      Date_of_Visit: req.body.Date_of_Visit,
      Time_of_Visit: req.body.Time_of_Visit,
      Subject_of_Inquiry: req.body.Subject_of_Inquiry,
      Assistant: req.body.Assistant
    });

    try {
      const savedPost = await post.save();
      res.json(savedPost);
    } catch (error) {
      console.log(error);
    }
  };

  this.viewOne = async (req, res) => {
    try {
      const post = await Post.findById(req.params.Id);
      res.json(post);
    } catch (error) {
      console.log(error);
    }
  };

  this.updateOne = async (req, res) => {
    try {
      const updated = await Post.updateOne(
        { _id: req.params.Id },
        { $set: { name: req.body.name, surname: req.body.surname } }
      );

      res.json(updated);
    } catch (error) {
      console.log(error);
    }
  };

  this.deleteOne = async (req, res) => {
    try {
      const removed = await Post.deleteOne({ _id: req.params.Id });
      res.json(removed);
    } catch (error) {
      console.log(error);
    }
  };
};
