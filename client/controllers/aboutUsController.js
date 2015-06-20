define(['app'], function(app) {
    app.register.controller('aboutUsController', ['$scope', '$rootScope', function ($scope, $rootScope) {
       $scope.title = "درباره ما";
    }]);
});