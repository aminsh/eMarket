define(['app',
    'persian-datepicker',
], function(app){
    app.register.directive('pdatepicker', function(){
       return {
           restrict: 'E',
           template: '<input ng-model="model"  style="width:150px;" class="form-control" />',
           replace: true,
           scope: {
               model: '=',
               readonly: '@'
           },
           link: function(scope, element, attrs){
               var selectedDate = scope.model
                   ? scope.model.split('/').toEnumerable().select(function(d){return parseInt(d);})
                   : undefined;

               $(element).pDatepicker({format: 'YYYY/MM/DD'});

               if(selectedDate){
                   $(element).pDatepicker('setDate', selectedDate);
               }

               scope.$watch('model', function (oldValue, newValue) {
                   selectedDate = newValue
                       ? newValue.split('/').toEnumerable().select(function(d){return parseInt(d);})
                       : undefined;

                   $(element).pDatepicker('setDate', selectedDate);
               });
           }
       };
    });
});
