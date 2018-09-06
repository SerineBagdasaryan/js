'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

   // .controller('HomeCtrl', function($scope, $http) {
    //});
.controller('HomeCtrl',['$scope', '$http', function($scope, $http){
    $http.get("http://localhost:8081/api/cars")
        .then(function(response) {
            $scope.obj = response.data;

            });

    $scope.doSignUp = function () {
        var cars = $scope.car;
        $http.post('http://localhost:8081/create', {cars}).then(function (requestHttp) {
            console.log(requestHttp.status);
        });
    };


    $scope.edite = function (id) {
        console.log(id);
        // $scope.car = true;

        $scope.updateData = function() {
            var cars = $scope.car;
            console.log(cars);

            var data = {
                _id:id,
                carr: cars
            }

            $http.post("http://localhost:8081/cars/update", data).then(function (requestHttp) {
                // $scope.car = response;
                console.log(requestHttp.status);
            });
        }

    };

    $scope.delet = function (id) {
        console.log(id);
        // $scope.car = true;
        $http.post("http://localhost:8081/cars/delete", {_id:id}).then(function (response) {
            // $scope.car = response;
            console.log(response);
        });
    };


}]);


//