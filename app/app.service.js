angular.module('app').service('FilmService', function($http){

    var films = function(){
        return $http({
            method: 'GET',
            url:'/api/films/'
        })
    }
    
    return {
        films:films
    }
})





// angular.module("myApp") 
// .service("mioServizio", function($http) { 
    
//    //USO GENERICO       
//    var getUsers = function(){
//        return $http({
//                    method: 'GET',
//                    url: '/someUrl'
//                }).then(function successCallback(response) {
//                   // this callback will be called asynchronously
//                   // when the response is available
//                }, function errorCallback(response) {
//                   // called asynchronously if an error occurs
//                  // or server returns response with an error status.
//              });
//    });


//  return {
//   getUsers: getUsers
// }
// });