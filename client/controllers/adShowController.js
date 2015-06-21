define(['app', 'service/rest/adService'], function (app) {
    app.register.controller('adShowController', function ($scope, adService, $routeParams) {
        $scope.title = '';
        var id = $routeParams.id;
        $scope.ad = {};

        adService.getById(id)
            .then(function (result) {
                $scope.ad = result;
                $scope.title = result.title;
            });
    });
});
