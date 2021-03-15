var express = require("express");
var mysql = require("mysql");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var routes = require("./controllers/burger_controller.js");

//local host port 
var PORT = process.env.PORT || 8080;

 

//express call 
var app = express();

app.use(express.static("public"));

//middelware/ body-parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");



app.listen(PORT, function(){
    console.log("Listening on Port:" + PORT);
});