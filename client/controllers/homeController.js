define(['app', 'service/rest/adService', 'directives/pdatepicker'], function (app) {
    app.register.controller('homeController', function ($scope, logger, $modal, confirm, adService) {
        $scope.title = 'Home';

        logger.success('کاربر گرامی به بازار الکترونیک خوش آمدید');

        $scope.date = '1392/05/15';

        $scope.changeDate = function () {
            $scope.date = "1394/05/05";
        }

    });
});