//ORM(object relational mapping) to be able to:
// CRUD functions 

var connection = require("./connection");

var orm = {
    selectAll: function(tabel,callback) {
        var queryString = " SELECT * FROM ??;";
        connection.query(queryString, [table], function(err,result){
            if (err) throw err;
            callback(result);
        });
    },

    insertOne: function(table, cols, vals, callback){
        var queryString = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(queryString, [table, cols, vals], function(err, data){
            if (err) throw err;
            callback(data);
        });


    },

    updateOne: function(colVal, id, callback) {
        var queryString = "UPSTE burgers SET devoured='1' WHERE " + id + ";";
        connection.query(queryString, [id], function(err, result){
            if (err) throw err;
            callback(result);
        });
    },

    deleteOne: function(id, callback) {
        var queryString = "DELETE FROM burger WHERE " + id + ";";
        connection.query(queryString, [id], function(err, result){
            if (err) throw err;
            callback(result);
        });
    },
}


//last line of code 
module.exports = orm;
