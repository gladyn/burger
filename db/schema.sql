DROP DATABASE IF EXISTS burgers_db;
-- Create the database 
CREATE DATABASE burgers_db;

USE burgers_db;
-- Create the table plans.
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(100) NOT NULL,
	devoured BOOLEAN DEFAULT false NOT NULL,
	PRIMARY KEY (id)
);