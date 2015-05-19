define(['app'], function(app){
    app.directive('content', function(){
        return {
          restrict: 'E',
          templateUrl: 'client/directives/templates/content-template.html',
          transclude: true,
          link: function(scope, element , attrs){
               scope.title = attrs.title;
          }
        };
    });
});
