var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;


var filmSchema = new Schema({
    vote_count:{
        type: Number,
        default:0
    },
    video: { 
        type: Boolean,
        default: false
    },
    vote_average: {
        type: Number,
        default:0
    },
    title:{
        type: String,
        required: true,
        unique: true
    },
    popularity:{
        type: Number,
        default:0
    },
    poster_path:{
        type: String,
    },
    original_language:{
        type: String,
        required: true
    },
    original_title:{
        type: String,
        required: true
    },
    genre_ids:[{
        type:Number,
        required: true

    }],
    backdrop_path:{
        type: String
    },
    adult:{
        type: Boolean,
        default: false
    },
    overview:{
        type: String,
        required: true
    },
    release_date:{
        type: Date,
       // required: true
    }


}, {toJSON: {virtuals: true}});

filmSchema.virtual('genre',{
    ref: 'Generi',
    localField: 'genre_ids',
    foreignField: 'id',
    justOne: false
});


var Film = mongoose.model('Film',filmSchema);

module.exports = Film;