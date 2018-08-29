'use strict';

angular.module('myApp.table', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/table', {
    templateUrl: 'table/table.html',
    controller: 'TableCtrl'
  });
}])

   // .controller('HomeCtrl', function($scope, $http) {
    //});
.controller('TableCtrl',['$scope', '$http', function($scope, $http){
    $http.get("http://localhost:8081/api/cars")
        .then(function(response) {
            $scope.obj = response.data;
        });

}]);


//