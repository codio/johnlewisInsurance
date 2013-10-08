App.controller("Step2Controller", ["$scope", "InsuranceData", function($scope, InsuranceData) {
   $scope.step = InsuranceData;
   $scope.backStepNumber = 0;

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

   $("#amount-slider").ionRangeSlider({
      min: 40000,
      max: 750000,
      type: "single",
      step: 10000,
      //postfix: "£",
      hasGrid: false,
      hideText: false,
      prettify: true,
      onChange: function(obj){
         //$scope.step.coverAmount = obj.fromNumber;
         //$scope.$apply();
      },
      onFinish: function(obj){
         $scope.step.coverAmount = obj.fromNumber;
         $scope.$apply();
      }
   });

   $("#age-slider").ionRangeSlider({
      min: 5,
      max: 40,
      type: "single",
      step: 1,
      hasGrid: false,
      hideText: false,
      prettify: true,
      onChange: function(obj){
         //$scope.step.coverAmount = obj.fromNumber;
         //$scope.$apply();
      },
      onFinish: function(obj){
         $scope.step.coverTerm = obj.fromNumber;
         $scope.$apply();
      }
   });

   $("#illness-slider").ionRangeSlider({
      min: 4000,
      max: 600000,
      type: "single",
      step: 1000,
      hasGrid: false,
      hideText: false,
      prettify: true,
      onChange: function(obj){
         //$scope.step.coverAmount = obj.fromNumber;
         //$scope.$apply();
      },
      onFinish: function(obj){
         $scope.step.illnesAmount = obj.fromNumber;
         $scope.$apply();
      }
   });

   $scope.$watch('step.coverTerm', function (e) {
      if(e > 4 && e < 41) {
         $("#age-slider").ionRangeSlider("update", {from: e});
      }
   });

   $scope.$watch('step.coverAmount', function (e) {
      if(e > 40000 && e < 750000) {
         $("#amount-slider").ionRangeSlider("update", {from: e});
      }
   });

   $scope.$watch('step.illnesAmount', function (e) {
      if(e > 4000 && e < 600000) {
         $("#illness-slider").ionRangeSlider("update", {from: e});
      }
   });
}]);



