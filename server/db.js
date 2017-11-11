var mongoose = require('mongoose');

mongoose.connect('mongodb://mouad:13021993@ds013559.mlab.com:13559/themoviesdb',

{useMongoClient: true},

function(err){
    if(err){
        console.log(err);
    }
    else {
        console.log("connesso al db");
    }
});



