var orm = require("../config/orm.js");

var burger = {


    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    //CRUD 
    insertOne: function(vals, callback) {
        orm.insertOne("burgers". "burger_name", vals, function(res){
            console.log("Inserted a burger to be devoured", vals)
            callback(res);
        })
    },

    //update 
    updateOne: function(vals, callback) {
        orm.updateOne(colVal, id, function(res){
            callback(res)
        });
    }
    //delete, figure out error 
    deleteOne: function(id, callback) {
        orm.deleteOne(id, function(res){
            callback(res);
        });
    }

}