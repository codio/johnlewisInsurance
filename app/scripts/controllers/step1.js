App.controller("Step1Controller", ["$scope", function($scope) {

   $scope.step = {
      formality : null,
      firstName : null,
      birthday : null,
      gender : null,
      tobacco : null,
      isPartner : null
   };


   $scope.setFormality = function(value) {
      $scope.step.formality = value;
   }

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
