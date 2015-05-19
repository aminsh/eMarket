define(['app',
    'service/rest/adService',
    'directives/dropdownlist',
], function (app) {
    app.register.controller('createAdController', function ($scope, adService, $location) {
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
    });
});
