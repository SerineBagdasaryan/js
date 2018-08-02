'use strict';

angular.module('myApp.companies', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/companies', {
            templateUrl: 'companies/companies.html',
            controller: 'CompaniesCtrl'
        });
    }])

    .controller('CompaniesCtrl', ['$scope','$http',function($scope,$http) {



        $http.get("companies/companies.json")
            .then(function(response) {
                $scope.array = response.data;


                $scope.product = []
                    ,$scope.currentPage = 1
                    ,$scope.numPerPage = 5
                    ,$scope.maxSize = 5;


                $scope.makeTodos = function() {
                    $scope.foo = [];

                    for (var i=0;i<$scope.array.length;i++) {
                        $scope.foo.push({ id:$scope.array[i]._id,name:$scope.array[i].name,permalink:$scope.array[i].permalink,crunchbase_url:$scope.array[i].crunchbase_url, homepage_url:$scope.array[i].homepage_url});
                    }
                };
                $scope.makeTodos();

                $scope.f = function(name,permalink,crunchbase_url,homepage_url) {

                    $scope.myDatas=(name+'<br>'+
                        permalink+'<br>'+crunchbase_url +'<br>'+homepage_url);
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