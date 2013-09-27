App = angular.module('App', ['ngResource'])
   .config(function ($routeProvider) {
      $routeProvider
         .when('/', {
            templateUrl: 'views/main.html',
            controller : 'MainController'
         })
         .otherwise({
            redirectTo: '/'
         });
   });
