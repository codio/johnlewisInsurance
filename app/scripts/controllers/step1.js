App.controller("Step1Controller", ["$scope", "InsuranceData", function ($scope, InsuranceData) {

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

   $('input').iCheck({
     checkboxClass: 'icheckbox_square-green',
     radioClass: 'iradio_square-green',
     increaseArea: '20%' // optional
   });

   $('.datefield input').autotab_magic().autotab_filter('numeric');
}]);
