module.exports = function(){
    
        var Generi = require('./generi.model.js')

//------------Lista Generi completa---------------------

        var getAll =function(req,res){
            Generi.find()
                .exec()
                .then(function(genere){
                    res.status(200).json(genere);
                })
                .catch(function(err){
                    res.status(500).send(err);
                })
        }

//------------Ricerca Singolo Genere ---------------------
        var getOne = function(req,res){
            Generi.findById(req.params.id)
            .exec()
            .then(function(genere){
                res.status(200).json(genere);
            })
            .catch(function(err){
                res.status(500).send(err);
            })
        }
    //------------ Ricerca Per Titolo Genere ---------------

        var getTitle = function(req,res){
            var title = req.query.name;
            
            Generi.find({name:title})
            .exec()
            .then(function(genere){
                res.status(200).json(genere)
            })
            .catch(function(err){
                res.status(500).send(err)
            })
        }

        //-------------- Aggiungere Nuovi Generi ----------

        var insertOne = function(req,res){
            var nuovoGenere = new Generi (req.body);
            nuovoGenere.save()
            .then(function(dato){
                res.status(200).json(dato)
            })
            .catch(function(err){
                res.status(500).send(err)
            })
        }
        //------------ Update Genere -----------------

        var genereUpdate = function(req,res){
            var title = req.query.name
            Generi.findOneAndUpdate({name:title},{$set:req.body})
            .then(function(data){
                res.status(200).json(data)
            })
            .catch(function(err){
                res.status(500).send(err)
            })
        }
        //--------------- Rimozione Genere ---------------------

        var genereRemove = function(req,res){
            var id = req.params.id;
            Generi.findById(id)
            .exec()
            .then(function(data){
                return data.remove();
            })
            .then(function(dato){
                res.status(200).json(dato)
            })
            .catch(function(err){
                res.status(500).send(err)
            })
        }



        return {
            getAll:getAll,
            getOne:getOne,
            getTitle:getTitle,
            insertOne:insertOne,
            genereUpdate:genereUpdate,
            genereRemove:genereRemove
        }
    
    
    }();