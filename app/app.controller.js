angular.module('app').controller('FilmCtrl', function($scope,FilmService){

var getfilms = function(){

    FilmService.films()
        .then(function(films){
            $scope.films = films.data;
        })
       .catch(function(err){
            throw err;
});
};

getfilms();
});