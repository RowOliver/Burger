var express = require("express");
var mysql = require("mysql");
var exphbs = require("express-handlebars");

//create routes 
//express call 
var app = express();

//local host port 
var PORT = process.env.PORT || 8080;
