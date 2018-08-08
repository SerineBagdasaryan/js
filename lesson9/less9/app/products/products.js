'use strict';

angular.module('myApp.products', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {
    templateUrl: 'products/products.html',
    controller: 'ProductsCtrl'
  });
}])

.controller('ProductsCtrl',function($scope,$http) {
    $http.get("http://localhost:8080/")
        .then(function(response) {
            console.log(response);
            $scope.obj = response.data;
        });

});
