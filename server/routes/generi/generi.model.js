var mongoose = require('mongoose');
var Film = require('./../films/film.model.js');

mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;


var generiSchema = new Schema({

    id:{
        type: Number,
        required: true
    },
    name:{
        type:String,
        required: true
    }

})


generiSchema.post('remove',function(valore){

    Film.update({},{
        $pull:{genre_ids: parseInt(valore.id)}
    })
    .exec();
});

var Generi = mongoose.model('Generi',generiSchema);

module.exports = Generi;