var express = require("express");

var router = express.Router();

// Import the model
var burger = require("../models/burger.js");

//GET

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//POST insert
router.post("/", function(req, res) {
  burger.insertOne("burger_name", req.body.name, function() {
    res.redirect("/");
  });
});

//PUT update
router.put("/:id", function(req, res) {
  var id = "id=" + req.params.id;

  console.log("condition", id);

  burger.updateOne(id, function(data) {
    console.log(data);
    res.redirect("/");
  });
});

module.exports = router;
