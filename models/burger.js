//import orm
var orm = require("../config/orm.js");

//cb is callback

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function( id, cb) {
    orm.updateOne(
      "burgers",
      {
        devoured: true
      },
      id,
      function(res) {
        console.log("hello");
        cb(res);
      }
    );
  },
  delete: function(condition, cb) {
    orm.deleteOne("burgers", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
