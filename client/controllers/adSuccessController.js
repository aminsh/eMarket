define(['app'], function(app){
    app.register.controller('adSuccessController', function($scope,$location, $routeParams){
        $scope.id = $routeParams.id;
    });
});
