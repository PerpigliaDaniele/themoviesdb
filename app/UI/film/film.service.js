angular.module('app').service('FilmService', function($http){

    var films = function(){
        return $http({
            method: 'GET',
            url:'/api/films/'
        })
    }
    var insertFilm = function(newFilm){
      
            return $http({
                        method: 'POST',
                        url: '/api/films',
                        json:true,
                        data: newFilm,
                    }).then(function successCallback(response) {
                        console.log('inserito');
                        
                    }, function errorCallback(response) {
                       // called asynchronously if an error occurs
                      // or server returns response with an error status.
                  });
      
           
    }
    return {
        films:films,
        insertFilm:insertFilm
    }

    
})




