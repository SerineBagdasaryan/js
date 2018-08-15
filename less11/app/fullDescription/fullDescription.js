'use strict';

angular.module('myApp.fullDescription', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/fullDescription', {
    templateUrl: 'fullDescription/fullDescription.html',
    controller: 'FullDescriptionCtrl'
  });
}])

    .controller('FullDescriptionCtrl', function($scope, $http) {
        $http.get("CAR LISTING/CAR LISTING.json")
            .then(function(response) {
                $scope.obj = response.data;
            });
    });