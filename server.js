var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var app = express();

// Set the port
var PORT = process.env.PORT || 8080;
//public directory to app
app.use(express.static("public"));

app.use(methodOverride("_method"));

// Sets up the Express app to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//route access
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
