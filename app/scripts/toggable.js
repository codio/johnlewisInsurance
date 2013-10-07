App.directive('toggable', function () {
   return function (scope, el, attr) {
      var $partner = $(el);

      attr.$observe('toggable', function(value) {
         if (value === 'true') {
            $partner
               .css({height: 0, overflow: 'hidden'})
               .animate({height: 500}, 300, function () {
                  $partner.css({overflow: 'visible', height: 'auto'});
               })
         }
         else {
            $partner
               .css({overflow: 'hidden'})
               .animate({height: 0}, 300)
         }
      });
   }
});