define(['app',
    'service/rest/adService',
    'directives/dropdownlist',
    'directives/uploader'
], function (app) {
    app.register.controller('adEditController', function ($scope, adService, $location, $routeParams) {
        $scope.title = 'ویرایش آگهی ' +  $routeParams.id;

        $scope.ad = {};

        adService.getById($routeParams.id)
            .then(function (result) {
                $scope.ad = result;
            })
            .catch(function (error) {
                console.error(error);
            });

        $scope.save = function () {
            adService.put($scope.ad._id, $scope.ad)
                .then(function (result) {
                    debugger;
                    $location.path('ad/success/' + result.ad._id);
                }).catch(function (error) {

                });
        }

        $scope.imageUploaded = function (img) {
            $scope.ad.image = img.fileName;
            $scope.$apply();
        }
    });
});
