'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/table.html',
    controller: 'HomeCtrl'
  });
}])

   // .controller('HomeCtrl', function($scope, $http) {
    //});
.controller('HomeCtrl',['$scope', '$http', function($scope, $http){
    $scope.doSignUp = function(){
var user = $scope.user;
        $http.post('http://localhost:8081/create', {user}).then(function (user) {
console.log(user);
        });
    };

}]);


//