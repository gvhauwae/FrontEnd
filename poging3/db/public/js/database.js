/**
 * Created by Gillian on 27/12/2016.

var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'password',
    database: 'places'
});
connection.connect(function(error){
    if(!!error){
        console.log('Error');
    }else{
        console.log('Connected');
    }
});

var place = {
    owner: 'Sandra Deproost',
    title: 'Eurobody',
    description: 'Eurobody is een luxueus prive sauna complex met B&B en zwembad, alsook gespecialiseerd in afslanken, zonnebank, hotspring, IR Cabines, personaltraining & wellness. U vindt ons terug in het rustige Tielt (West-Vlaanderen) op 30minuten van de Belgische kust & op 15 minuten rijden van de afrit E40 & E17',
    picture:'http://www.ceilux.com/media/projectslides/xl/6/00-eurobody_wellnesslab.jpg',
    price:'100',
    city: 'tielt',
    code: '8700'
};

var query = connection.query('insert into place set ?', place, function(err, result){
    if (err){
        console.error(err);
        return;
    }
    console.error(result);
});

app.get('/',function(req,resp){

});
app.listen(1337);
 */