var path = require("path");

module.exports = function(app) {

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./notes.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
  });

  // If no matching route is found default to home
  app.get("index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
