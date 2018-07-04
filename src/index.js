"use strict";
const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/:id", function(req, res) {
  res.json({ message: "HEY!" });
});

module.exports.handler = serverless(app);