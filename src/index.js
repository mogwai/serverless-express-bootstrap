const app = require("express")();

app.get("/", (req, res) => res.json({ message: "HEY!" }));

// Creates a handler to be used in the .yaml file
// and exports the app for testing
module.exports = {
  app,
  handler: require("serverless-http")(app)
};
