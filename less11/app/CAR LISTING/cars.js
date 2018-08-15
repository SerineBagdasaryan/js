'use strict';

angular.module('myApp.cars', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/CAR LISTING', {
            templateUrl: 'CAR LISTING/cars.html',
            controller: 'CarsCtrl'
        });
    }])

    .controller('CarsCtrl', function($scope, $http) {
        $http.get("http://localhost:8080/api/cars")
            .then(function(response) {
                $scope.obj = response.data;
            });
    });