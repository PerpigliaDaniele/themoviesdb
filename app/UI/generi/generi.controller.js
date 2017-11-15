angular.module('app').controller('GenreCtrl', function($scope,GenreService) {

    var getGenres = function() {
        GenreService.generi()
            .then( function (genres) {
                $scope.genres=genres.data;
            })
            .catch(function(err) {
                throw err;
            });
    }
    getGenres();
});