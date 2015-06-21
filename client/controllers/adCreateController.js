define(['app',
    'service/rest/adService',
    'directives/dropdownlist',
    'directives/uploader'
], function (app) {
    app.register.controller('adCreateController', function ($scope, adService, $location) {
        $scope.title = 'آگهی جدید';

        $scope.ad = {
            title: '',
            price: 0,
            image: '',
            des: '',
            category: {_id: '', title: ''},
            phone: '',
            email: ''
        };

        $scope.save = function () {
            adService.post($scope.ad)
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
