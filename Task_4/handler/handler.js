const express = require("express");
const Users = require("../models/userModel");

class RequestHandler {
  viewAll(req, res) {
    Users.find({}).then(function(visitors) {
      res.send(visitors);
    });
  }
  viewOne(req, res) {
    Users.find({ _id: req.params.id }).then(function(visitors) {
      res.send(visitors);
    });
  }
  addOne(req, res, next) {
    Users.create(req.body).then(function(visitors) {
      res.send(visitors);
    });
  }
  updateOne(req, res) {
    Users.findByIdAndUpdate({ _id: req.param }).then(function() {
      Users.findOne({ _id: req.params.id }).then(function(visitors) {
        res.send(visitors);
      });
    });
  }
  deleteAll(req, res) {
    Users.remove({}).then(function(visitors) {
      res.send({ visitors });
    });
  }
  deleteOne(req, res) {
    Users.findByIdAndRemove({ _id: req.params.id }).then(function(visitors) {
      res.send(visitors);
    });
  }
}

module.exports = RequestHandler;
