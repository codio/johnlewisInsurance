App.controller('QuoteCtrl', ['$scope', function ($scope) {
   $scope.steps = [
      {
         name : "step1",
         active : true
      },
      {
         name : "step2",
         active : false
      },
      {
         name : "step3",
         active : false
      },
      {
         name : "step4",
         active : false
      }
   ];

   $scope.submit = function() {
      var item = _.findWhere($scope.steps, {active: false});
      if (item) {
         item.active = true;
      }

      console.log($scope.steps);
   };
}]);
