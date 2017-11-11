module.exports = function(){

    var Film = require('./film.model.js')

    var getAll =function(req,res){
        Film.find()
            .exec()
            .then(function(films){
                res.status(200).json(films);
            })
            .catch(function(err){
                res.status(500).send(err);
            })
    }

    var getOne = function(req,res){
        Film.findById(req.params.id)
        .exec()
        .then(function(film){
            res.status(200).json(film)
        })
        .catch(function(err){
            res.status(500).send(err)
        })
    }

    //-----------Ricerca Per Titolo----------------------

    var getTitle = function(req,res){
        Film.find({title:req.query.title})
        .exec()
        .then(function(film){
            res.status(200).json(film)
        })
        .catch(function(err){
            res.status(500).send(err)
        })

    }

//-----------Aggiunto nuovo Film----------------------

    var insertOne = function(req,res){
        var nuovoFilm = new Film (req.body);
        nuovoFilm.save()
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (err){
            throw err;
        });
    }

//-----------Update FILM----------------------

    var filmUpdate = function(req,res){
        var id = req.params.id;
        Film.findByIdAndUpdate(id,{$set:req.body})
        .then(function(data){
            res.status(200).json(data);
        })
        .catch(function (err){
            throw err;
        });
    }

//-----------Rimozione FILM----------------------

    var filmRemove = function(req,res) {
           var id = req.params.id;
            Film.findByIdAndRemove(id)
            .exec()
            .then(function(data){
                res.status(200).json(data);
            })
            .catch(function (err){
                throw err;
            });
    }

//---------- VoteCount ---------------------------

var modificaMedia = function (req, res) {
    
            var voto = req.body.voto;
            Film.findById(req.params.id)
                .then(function (film) {
                    var voteAverage=film.vote_average;
                    var voteCount=film.vote_count+1;
                    film.vote_average = ((film.vote_average * film.vote_count)+ voto) / voteCount;
                    film.vote_count=voteCount;
                    return film.save();
                })
                .then(function (film) {
    
                    res.status(200).json(film);
                })
                .catch(function (err) {
                    res.status(500).json(err);
                });
            }
    return {
        getAll:getAll,
        getOne:getOne,
        getTitle:getTitle,
        insertOne:insertOne,
        filmUpdate:filmUpdate,
        filmRemove:filmRemove,
        modificaMedia:modificaMedia
    }





}();