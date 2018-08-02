'use strict';

angular.module('myApp.restaurant', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/restaurant', {
            templateUrl: 'restaurant/restaurant.html',
            controller: 'RestaurantCtrl'
        });
    }])

    .controller('RestaurantCtrl', ['$scope','$http',function($scope,$http) {
        $http.get("restaurant/restaurants.json")
            .then(function(response) {
                $scope.array = response.data;


                $scope.product = []
                    ,$scope.currentPage = 1
                    ,$scope.numPerPage = 5
                    ,$scope.maxSize = 5;


                $scope.makeTodos = function() {
                    $scope.foo = [];

                    for (var i=0;i<$scope.array.length;i++) {
                        $scope.foo.push({ id:$scope.array[i]._id,name:$scope.array[i].name,URL:$scope.array[i].URL,address:$scope.array[i].address, outcode:$scope.array[i].outcode, postcode:$scope.array[i].postcode,rating:$scope.array[i].rating,type_of_food:$scope.array[i].type_of_food});
                    }
                };
                $scope.makeTodos();

                $scope.f = function(name,URL,address,outcode,postcode,rating,type_of_food) {

                    $scope.myDatas=(name+'<br>'+
                        URL+'<br>'+ address+'<br>'+ outcode+'<br>'+postcode+ "<br>" + rating + "<br>"+type_of_food);
                    document.write($scope.myDatas);

                    //sessionStorage["myData"] = angular.copy($scope.myDatas);

                    //window.open("test.html")
                    //console.log();
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