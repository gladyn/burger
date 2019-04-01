//connection
var connection = require("./connection.js");


var orm = {
	selectAll: function(table, cb) {
		var query = "SELECT * FROM ??;";
		connection.query(query, [table], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function(table, colName, colValue, cb) {
		var query = `INSERT INTO ${table} (burger_name, devoured) VALUES ("${colValue}", false);`;
		console.log("hello", colValue);
		connection.query(query, function(err, result) {
			if (err) throw err;
			console.log("Successfully inserted: " + result);
			cb(result);
		});
	},
	updateOne: function(table, colName, id, cb) {
		console.log("id", id);
		var devour= colName.devoured
		console.log(devour);
		var query = `UPDATE ${table} SET devoured=${devour} WHERE ${id};`;
		console.log(colName);
		connection.query(query, function(err, result) {
			if (err) throw err;
			console.log("Successfully updated: " + result);
			cb(result);
		});
	},
	deleteOne: function(table, idCol, idValue, cb) {
		var query = "DELETE FROM ?? WHERE ?? = ?;"
		connection.query(query, [table, idCol, idValue], function(err, result) {
			if (err) throw err;
			console.log("Successfully deleted: " + result);
			cb(result);
		})
	}
};

module.exports = orm;