'use strict';

angular.module('myApp.products', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {
    templateUrl: 'products/products.html',
    controller: 'ProductsCtrl'
  });
}])

.controller('ProductsCtrl', ['$scope','$http',function($scope,$http) {
    $http.get("products/products.json")
        .then(function(response) {
            $scope.array = response.data;


            $scope.product = []
                ,$scope.currentPage = 1
                ,$scope.numPerPage = 5
                ,$scope.maxSize = 5;


            $scope.makeTodos = function() {
                $scope.foo = [];

                for (var i=0;i<$scope.array.length;i++) {
                    $scope.foo.push({ id:$scope.array[i]._id,name:$scope.array[i].name,price:$scope.array[i].price,image:$scope.array[i].image,monthly_price:$scope.array[i].monthly_price, type:$scope.array[i].type, color:$scope.array[i].color});
                }
            };
            $scope.makeTodos();

            $scope.f = function(name,price,montly_price,image,type,color) {

                $scope.myDatas=(name+''+
                    price+''+ montly_price+''+ type+''+color);
                

                //sessionStorage["myData"] = angular.copy($scope.myDatas);

                //window.open("test.html")
                //console.log();
            };


            $scope.myimage = {
                "width" : "300px",
                "height" : "300px"
            };

            $scope.Pagination =  {
                "position": "fixed",
                "left": 0,
                "bottom": 0,
                "width": "100%",
                "text-align": "center"
            };


            $scope.numPages = function () {
                return Math.ceil($scope.foo.length / $scope.numPerPage);
            };

            $scope.$watch('currentPage + numPerPage', function() {
                var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                    , end = begin + $scope.numPerPage;

                $scope.product = $scope.foo.slice(begin, end);
            });
        });



}]);