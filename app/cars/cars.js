'use strict';

angular.module('myApp.cars', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/cars', {
            templateUrl: 'cars/cars.html',
            controller: 'CarsCtrl'
        });
    }])

    .controller('CarsCtrl', function($scope, $http) {
        $http.get("cars/cars.json")
            .then(function(response) {
                $scope.myWelcome = response.data;
                $scope.divAvto = {"padding":"10px"};
                $scope.myimageStars = {"width" : "70px",
                    "height" : "13px"};

                $scope.myimageIcone = {   "width" : "20px",
                    "height" : "20px"};

                $scope.myimage = {
                    "width" : "350px",
                    "height" : "200px"
                };


            });
    });