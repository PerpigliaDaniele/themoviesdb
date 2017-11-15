angular.module('app').controller('FilmCtrl', function($scope,FilmService){

var getfilms = function(){

    FilmService.films()
        .then(function(films){
            $scope.films = films.data;
            $scope.title=films.data[0].title;
            $scope.poster_path=films.data[0].poster_path;
            $scope.secondRate = films.data[0].vote_average;
            if(films.data[0].original_language=='en'){
                $scope.lang='English';

            }
            $scope.release_date=films.data[0].release_date.substring(0,10);
            $scope.overview=films.data[0].overview;
            $scope.popularity=films.data[0].popularity;
        })
       .catch(function(err){
            throw err;
});
};

getfilms();
$scope.click = function (film){
    
    $scope.title=film.title;
    $scope.poster_path=film.poster_path;
    $scope.overview=film.overview;
    
    $scope.secondRate = film.vote_average;
    if(film.original_language=='en'){
        $scope.lang='English';

    }
    $scope.popularity=film.popularity;
    $scope.release_date=film.release_date.substring(0,10);
}

$scope.master = {};

  $scope.update = function(newFilm) {
      var data={
        'title':newFilm.title,
        'poster_path':"/"+newFilm.poster_path,
        'original_title':newFilm.title,
        'original_language':newFilm.original_language,
        'genre_ids':newFilm.genre_ids.split(' '),
        'overview':newFilm.overview,
        'release_date':newFilm.release_date
      }
      
      console.log(data);
      FilmService.insertFilm(data);
         
        

   // $scope.master = angular.copy(user);
  };

  $scope.reset = function() {
    $scope.newFilm = angular.copy($scope.master);
  };

  $scope.reset();



});



/*angular.module('app')
.controller('InsertCtrl', ['$scope', function($scope) {
  $scope.master = {};

  $scope.update = function(user) {
    $scope.master = angular.copy(user);
  };

  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };

  $scope.reset();
}]);*/