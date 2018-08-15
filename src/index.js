const express = require("express");
const app = express();

app.get("/:id", function(req, res) {
  res.json({ message: "HEY!" });
});

// Creates a handler to be used in the .yaml file
// and exports the app for testing using mocha
require('./exporter')(module, app)