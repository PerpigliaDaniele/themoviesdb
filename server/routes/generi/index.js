var express = require('express');

var generiController = require('./generi.controller.js');

var generes = express.Router();

generes.delete('/:id',generiController.genereRemove);
generes.get('/',generiController.getAll);
generes.get('/:id([0-9a-f]{24})',generiController.getOne);
generes.get('/query',generiController.getTitle);
generes.post('/',generiController.insertOne);
generes.put('/query',generiController.genereUpdate);

module.exports = generes;