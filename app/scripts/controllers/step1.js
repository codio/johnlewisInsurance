App.controller("Step1Controller", ["$scope", "$rootScope","InsuranceData", function ($scope, $rootScope, InsuranceData) {

   $scope.step = InsuranceData;


   $scope.setFormality = function(value, isPartner) {
      if (isPartner) {
         $scope.step.p_formality = value;
      }
      else {
         $scope.step.formality = value;
      }

   };

   $('.dropdown-toggle').dropdown();
   $('.datepicker').datepicker({
      format: 'mm/dd/yyyy',
      startDate: '01/01/1940'
   });

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

   $('.datefield input').autotab_magic().autotab_filter('numeric');
}]);
