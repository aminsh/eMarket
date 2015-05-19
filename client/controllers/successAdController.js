define(['app'], function(app){
    app.register.controller('successAdController', function($scope,$location, $routeParams){
        $scope.id = $routeParams.id;
    });
});
