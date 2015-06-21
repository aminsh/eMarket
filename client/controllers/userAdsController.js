define(['app', 'service/rest/adService', 'directives/grid'], function (app) {
    app.register.controller('userAdsController', function ($scope, adService, confirm, translate, $location) {
        $scope.title = translate('MY ADS PAGE TITLE');

        $scope.columns = [
            {
                name: '',
                title: translate('IMAGE'),
                template: '<img src="${image}" style="width: 100px;height: 100px" />'
            },
            {name: 'title', title: translate('TITLE')}
        ];

        $scope.commands = [
            {
                title: translate('REMOVE'),
                action: function (current) {
                    confirm(
                        translate('REMOVE AD'),
                        translate('CONFIRM MESSAGE'))
                        .then(function () {
                            adService.remove(current._id)
                                .then(function (result) {
                                    if (result.success)
                                        $scope.gridOption.refresh();
                                })
                                .catch(function (error) {
                                    console.error(error);
                                });
                        });
                },
                imageClass: "k-icon k-i-close"
            },
            {
                title: translate('SHOW'),
                action: function (current) {
                    $location.path('/ad/show/' + current._id);
                    $scope.$apply();
                }
            },
            {
                title: translate('EDIT'),
                action: function (current) {
                    $location.path('/ad/edit/' + current._id);
                    $scope.$apply();
                },
                imageClass: "k-icon k-i-pencil"
            }
        ];

        $scope.gridOption = {};
    });
});
