angular.module('sales').service('salesApi', ['$http',function($http) {
    this.getAllBookIds = function () {
        return $http.get('http://localhost:9000/sales/books').then(function (ids) {
            return ids;
        });
    }
}]);