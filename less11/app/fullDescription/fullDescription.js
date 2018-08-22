'use strict';

angular.module('myApp.fullDescription', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/fullDescription', {
            templateUrl: 'fullDescription/fullDescription.html',
            controller: 'FullDescriptionCtrl'
        });
    }])

    .controller('FullDescriptionCtrl', function($scope, $http) {
        $http.get("http://localhost:8080/tours/:id?")
            .then(function(response) {
                $scope.obj = response.data;
            });
    });