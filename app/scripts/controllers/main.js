App.controller('MainController', ['$scope', "InsuranceData", function ($scope, InsuranceData) {
   $scope.steps = [
      {
         class : 'about',
         name : "About you",
         completed : false,
         active : true,
         visible : true,
         //data : null,
         validateFunction : isValideStep1,
         error : false,
         id: 0
      },
      {
         class : 'partner',
         name : "About your partner",
         completed : false,
         active : false,
         visible : false,
         //data : null,
         validateFunction : null,
         error : false,
         id: 1
      },
      {
         class : 'settings',
         name : "Settings",
         completed : false,
         active : false,
         visible : true,
         //data : InsuranceData,
         validateFunction : isValidStep2,
         error : false,
         id: 2
      },
      {
         class : 'result',
         name : "Result",
         completed : false,
         active : false,
         visible : true,
         //data : null,
         validateFunction : isValidDefault,
         error : false,
         id: 3
      }
   ];

   $scope.formData = InsuranceData;




   $scope.submit = function(stepData) {
      

      function getNextStep () {
         var currentStep = _.findWhere($scope.steps, {visible : true, active : true});
         
         function next(curStep) {
            return $scope.steps[curStep.id++];
         }
         
         var nextStep = next(currentStep);
         
         nextStep = (nextStep && nextStep.visible) ? nextStep
            : (nextStep ? next(nextStep) : null);
            
         return nextStep;   
         
         //return _.findWhere($scope.steps, {visible: true, completed : false});
      }

      function goToNextStep () {
         var item = getNextStep();
         if (item) {
            item.active = true;
            item.started = true;
         }
      }


      function saveData(stepData) {
         var activeStep = _.findWhere($scope.steps, {visible : true, active : true});

         if (activeStep && activeStep.hasOwnProperty('validateFunction') && activeStep.validateFunction(stepData)) {
            activeStep.completed = true;

            var $wrap = $('.page-wrap'),
                $page = $('.page.showed'),
                $nextPage = $('.page.' + getNextStep().class);

            $wrap.css({overflow: 'hidden'});

            var animationTime = 550;
            $page.animate({opacity: 0}, animationTime, function () {
               $page.attr('style', null);
               $wrap.attr('style', null);

               activeStep.active = false;
               $scope.$apply();
            });

            $nextPage.css({
               opacity: 0,
               position:'absolute',
               top: 24,
               left: 19,
               width: $page.width()
            })
            .animate({opacity: 1}, animationTime, function () {
               $nextPage.attr('style', null);
            });

             // scroll to top
             $('html,body').animate({scrollTop:0}, animationTime);

            return true;
         }

         return false;
      }

      if (saveData(stepData)) {
         goToNextStep();
      }

   };

   function isValideStep1 (stepData) {
      $scope.steps[0].error = false;

      if (!(stepData.hasOwnProperty('gender') && stepData.gender)) {
         $scope.steps[0].error = true;
      }

      if(!(stepData.hasOwnProperty('tobacco') && stepData.tobacco)) {
         $scope.steps[0].error = true;
      }

      if(!(stepData.hasOwnProperty('isPartner') && stepData.isPartner != null)) {
         $scope.steps[0].error = true;
      }


      if (stepData.hasOwnProperty('isPartner') && stepData.isPartner == '1') {
         //$scope.steps[1].visible = true;

         if (!(stepData.hasOwnProperty('p_gender') && stepData.p_gender)) {
            $scope.steps[0].error = true;
         }

         if(!(stepData.hasOwnProperty('p_tobacco') && stepData.p_tobacco)) {
            $scope.steps[0].error = true;
         }
      }

      return !$scope.steps[0].error;

   };

   function isValidStep2(stepData) {
      $scope.steps[2].error = false;

      if(!(stepData.hasOwnProperty('coverAmount') && (stepData.coverAmount > 40000 && stepData.coverAmount < 750000) )) {
         $scope.steps[2].error = true;
      }

      if(!(stepData.hasOwnProperty('coverTerm') && (stepData.coverTerm >= 5 && stepData.coverTerm <= 40) )) {
         $scope.steps[2].error = true;
      }

      if(!(stepData.hasOwnProperty('coverType') && stepData.coverType)) {
         $scope.steps[2].error = true;
      }

      if(!(stepData.hasOwnProperty('illnes') && stepData.illnes)) {
         $scope.steps[2].error = true;
      }
      else if (stepData.hasOwnProperty('illnes') && stepData.illnes == "yes" ){
         if (!(stepData.hasOwnProperty('illnesAmount') && stepData.illnesAmount)) {
            $scope.steps[2].error = true;
         }
      }

      return !$scope.steps[2].error;
   };

   function isValidDefault(stepData) {
      return true;
   };

   $scope.goToStep = function(step) {
      var activeStep = _.findWhere($scope.steps, {visible : true, active : true});

      if(step.class === activeStep.class) return;

      step.active = true;

      var $wrap = $('.page-wrap'),
         $page = $('.page.showed'),
         $prevPage = $('.page.' + step.class);

      $wrap.css({overflow: 'hidden'});

      $page.animate({opacity: 0}, 550, function () {
         $page.attr('style', null);
         $wrap.attr('style', null);

         activeStep.active = false;
         $scope.$apply();
      });

      var animationTime = 550;
      $prevPage.css({
         opacity: 0,
         position:'absolute',
         top: 24,
         left: 19,
         width: $page.width()
      })
      .animate({opacity: 1}, animationTime, function () {
         $prevPage.attr('style', null);
      });

      // scroll to top
      $('html,body').animate({scrollTop:0}, animationTime);
   };

   $scope.backStep = function (stepNumber) {
      $scope.goToStep($scope.steps[stepNumber]);
   };

}]);


App.factory('InsuranceData', function() {
   return {
      formality : null,
      firstName : null,
      birthday : null,
      gender : null,
      tobacco : null,
      isPartner : null,

      p_formality : null,
      p_firstName : null,
      p_birthday : null,
      p_gender : null,
      p_tobacco : null,

      coverAmount: null,
      coverTerm : null,
      coverType : null,
      illnes : null,
      illnesAmount : null
   };
});
