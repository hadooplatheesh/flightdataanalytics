var express = require('express');
var mongoose = require('mongoose');
var app = express();
var Schema = mongoose.Schema;
var flightschema = new Schema({
    flightname: String,
    flightId: String,
    flightOriginAirport: String
});

// Mongoose Model definition
var flightmodel = mongoose.model('flights', flightschema);

var conn = mongoose.connect("mongodb://192.168.11.4:27017/FlightsDB", function(err, db) {
    if (err) {
        console.log(err);
    }
});
exports.insert = function(req, res){
	
	// Mongoose Schema definition
	
	// Bootstrap express
	var flight = new flightmodel();
	flight.flightname = 'Virgin Atlantic';
	flight.flightId = 'V456890';
	flight.flightOriginAirport = 'SFO';
	
	flight.save(function(err, user_Saved){
	    if(err){
		        throw err;
		        console.log(err);
		    }else{
		        console.log('saved!');
		    }
		});
}


exports.show = function(req, res){
	res.render('index.html', { title: 'Flight Data Analytics' });
}

