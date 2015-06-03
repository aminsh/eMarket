define(['app', 'service/rest/adService'], function (app) {
    app.register.controller('homeController', function ($scope, logger, $modal, confirm, adService) {
        $scope.title = 'Home';

        logger.success('کاربر گرامی به بازار الکترونیک خوش آمدید');

        $scope.openConfirm = function () {
            confirm('ذخیره سازی همه اطلاعات', 'آیا مایل به ادامه عملیات هستید ؟')
                .then(function (result) {
                    debugger;
                });
        }

        $scope.items = ['item1', 'item2', 'item3'];

        $scope.animationsEnabled = true;

        $scope.open = function (size) {

            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                //$log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };

        $scope.datepicker = function () {
            $('#textBoxInputId').MdPersianDateTimePicker({
                Placement: 'bottom', // default is 'bottom'
                Trigger: 'focus', // default is 'focus',
                EnableTimePicker: true, // default is true,
                TargetSelector: '', // default is empty,
                GroupId: '', // default is empty,
                ToDate: false, // default is false,
                FromDate: false, // default is false,
            });

            logger.success();
        }

        $scope.myads = function () {
            adService.getMyAds()
                .then(function (result) {
                    debugger;
                });
        };
    });


    app.register.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });


});