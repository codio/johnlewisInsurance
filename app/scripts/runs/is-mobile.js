/**
 * $scope.isMobile
 * Extends $scope for isMobile
 */

App.run(['$rootScope', function($rootScope) {
   var $w = $(window);

   if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      /*if($w.width() > CONST.MOBILE_MAX_WIDTH) {
       setSizeWatcher();
       }
       else {*/
      $rootScope.isMobile = true;
      $rootScope.$watch('isMobile', angular.noop)();
      //}
   }
   else {
      setSizeWatcher();
   }

   function setSizeWatcher () {
      $rootScope.isMobile = $w.width() <= 767;

      $w.bind('resize', function() {
         $rootScope.isMobile = $w.width() <= 767;
         $rootScope.$apply();
      });
   }

}]);