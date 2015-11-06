var app = angular.module('uicomp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('landing', {
        url: '/landing',
        templateUrl: 'views/landing.html',
        controller: 'LandingController',
        controllerAs: 'LandingCtrl'
        })
        .state('routetest', {
        url: 'routetest',
        templateUrl: 'views/routetest.html'
        })
});