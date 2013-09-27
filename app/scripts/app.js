App = angular.module('App', ['ngResource'])
   .config(function ($routeProvider) {
      $routeProvider
         .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
         })
         .when('/getQuote', {
            templateUrl: 'views/getQuote.html',
            controller : 'QuoteCtrl'
         })
         .otherwise({
            redirectTo: '/'
         });
   });
