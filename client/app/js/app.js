var app = angular.module('uicomp', ['ui.router', 'sales']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('landing', {
            url: '/landing',
            templateUrl: 'views/landing.html',
            controller: 'LandingController',
            controllerAs: 'LandingCtrl',
            resolve: {
                bookIds: function (salesApi) {
                    return salesApi.getAllBookIds();
                }
            }
        })
        .state('routetest', {
            url: 'routetest',
            templateUrl: 'views/routetest.html'
        })
});