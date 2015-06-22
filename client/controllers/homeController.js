define(['app', 'service/rest/adService', 'directives/pdatepicker'], function (app) {
    app.register.controller('homeController', function ($scope, logger, $modal, confirm, adService) {
        $scope.title = 'Home';

        logger.success('کاربر گرامی به بازار الکترونیک خوش آمدید');

        $scope.date = '1392/05/15';

        $scope.changeDate = function () {
            $scope.date = "1394/05/05";
        }

        $scope.categories = [
            {id: '55436acc954c92241291667e' , title: 'لوازم الکترونیکی', icon: 'mobile.png'},
            {id: '5543b251faacfba8124a91ae' , title: 'لوازم خانه', icon: 'washingmachine.png'},
            {id: '5543b29cfaacfba8124a91af' , title: 'لوازم شخصی', icon: 'watch.png'},
            {id: '5543b2aafaacfba8124a91b0' , title: 'ورزشی ، تفریحی و سرگرمی', icon: 'vacation.png'},
            {id: '5543b327faacfba8124a91b1' , title: 'وسایل نقلیه', icon: 'car.png'},
            {id: '5543b33bfaacfba8124a91b2' , title: 'املاک', icon: 'house.png'}
        ];
    });
});