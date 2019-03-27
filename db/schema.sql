DROP DATABASE IF EXISTS burgers_db;
-- Create the database 
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers(

id INTEGER(100) NOT NULL,
burger_name varchar(100) NOT NULL,
devoured  BOOLEAN NOT NULL,
PRIMARY KEY (id)
);