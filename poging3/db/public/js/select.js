/**
 * Created by Gillian on 27/12/2016.

var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'password',
    database: 'places'
});
connection.connect();

connection.query('select * from place', function(err, result){
    if (err){
        console.error(err);
        return;
    }
    console.error(result);
    console.log(result);
});

 */