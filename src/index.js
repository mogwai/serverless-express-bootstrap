const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.json({ message: "HEY!" });
});

// Creates a handler to be used in the .yaml file
// and exports the app for testing using mocha

module.exports = {
  app,
  handler: require("serverless-http")(app)
};
