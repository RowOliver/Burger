var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

//GET route
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var burgerData = { burger: data };
        res.render("index", burgerData);
    });
});

