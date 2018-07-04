const serverless = require("serverless-http");

module.exports = function(mod, app) {
  mod.exports = {
    app,
    handler: serverless(app)
  };
};
