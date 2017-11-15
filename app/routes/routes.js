angular.module('app').config( function ($stateProvider,  $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.when('','/');
    $stateProvider.state('/' ,{
        url:'/',
        views:{
            'menu': {
                templateUrl:'./app/UI/templates/nav.template.html',
            },
            'content':{
                template:'<p style="color:white">home<p/>'
            }
        }
        
    }).state('film', {
        url:'/home',
        views:{
            'menu': {
                templateUrl:'./app/UI/templates/nav.template.html',
            },
            'content': {
                
                templateUrl:'./app/UI/templates/pages/home.template.html'
            }
        }
    }).state('series', {
        url:'/serie',
        views:{
            'menu': {
                templateUrl:'./app/UI/templates/nav.template.html',
            },
            'content': {
                
            }
        }
    })

})