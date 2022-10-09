"use strict";

var fs = require("fs");
var path = require("path");
var mongoose = require("mongoose");
var basename = path.basename(__filename);
var db = {};
const config = require("config");

const mongooseIns = mongoose.connect(config.get("dbconfig").url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// "url": "mongodb+srv://admin:VW3lN4t28YqUseeo@cluster0.zqmionk.mongodb.net/hercare?retryWrites=true&w=majority"

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    var model = require(path.join(__dirname, file));
    db[model.modelName] = model;
  });

mongoose.connection.on(
  "error",
  console.error.bind(console, "Unable to connect to Mongo database:")
);
mongoose.connection.once("open", function () {
  console.log("Connected to Mongo database:");
});

module.exports = db;
