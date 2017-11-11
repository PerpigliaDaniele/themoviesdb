var express = require('express');


var filmController = require('./film.controller.js');


var films = express.Router();

films.get('/', filmController.getAll);
films.get('/:id([0-9a-f]{24})', filmController.getOne);
films.get('/query', filmController.getTitle);
films.post('/', filmController.insertOne);
films.delete('/:id', filmController.filmRemove);
films.put('/:id', filmController.filmUpdate);
films.get('/:id', filmController.modificaMedia);


module.exports = films;