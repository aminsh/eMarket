define(['app',
    'service/rest/adService',
    'directives/inifinitescroll',
    'directives/dropdownlist',], function (app) {
    app.register.controller('adListController', function ($scope, adService , translate , $routeParams) {

        $scope.title = translate('ADS LIST');

        $scope.ads = [];

        $scope.param = {
            categoryId: $routeParams.categoryId ? $routeParams.categoryId : ''
        };

        $scope.$watch('param.categoryId', function (newValue) {
            if (newValue == '') {
                adService.searchAds()
                    .then(function (result) {
                        $scope.ads = result;
                    });
                return;
            }

            adService.searchAds('?categoryId=' + newValue)
                .then(function (result) {
                    $scope.ads = result;
                });
        });

        $scope.query = function (index) {
            return '/api/searchAds?page=' + index;
        };

        $scope.response = function (result) {
            result.forEach(function (item) {
                $scope.ads.push(item);
            });

            $scope.$apply();
        };
    });
});
