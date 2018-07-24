'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
    'myApp.home',
    'myApp.about',
    'myApp.blog',
    'myApp.work',
    'myApp.services',
    'myApp.contact',
  'myApp.version'
]).s
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);

