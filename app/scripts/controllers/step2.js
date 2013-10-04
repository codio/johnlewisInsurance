App.controller("Step2Controller", ["$scope", "InsuranceData", function($scope, InsuranceData) {
   $scope.step = InsuranceData;

   $('.styled-radio').iCheck({
      checkboxClass: 'icheckbox_square-green',
      radioClass: 'iradio_square-green',
      increaseArea: '20%' // optional,
   }).on('ifChanged', function(event){
         var el = $(event.target),
            dataName = el.attr('name');

         $scope.step[dataName] = el.val();
         $scope.$apply();

      });
}]);



