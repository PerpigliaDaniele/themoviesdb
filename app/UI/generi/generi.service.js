angular.module('app').service('GenreService', function($http) {

    var generi =function() {
        return $http({
            method:'GET',
            url:'/api/generi/'
        })
    }
    return {
        generi:generi
    }


});