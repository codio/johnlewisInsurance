App.controller('MainController', ['$scope',function ($scope) {
   $scope.steps = [
      {
         name : "About you",
         active : true
      },
      {
         name : "About your partner",
         active : false
      },
      {
         name : "Settings",
         active : false
      },
      {
         name : "Result",
         active : false
      }
   ];

   $scope.submit = function() {
      var item = _.findWhere($scope.steps, {active: false});
      if (item) {
         item.active = true;
      }
   };


   $('.dropdown-toggle').dropdown();
   $('.datepicker').datepicker();
}]);
