var app = angular.module('uicomp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('landing', {
        url: '/',
        templateUrl: 'views/landing.html'
    })
});