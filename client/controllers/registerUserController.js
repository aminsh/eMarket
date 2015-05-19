define(['app', 'service/rest/userService'], function (app) {
    app.register.controller('registerUserController', function ($scope, userService) {
        $scope.title = 'À»  ‰«„';

        $scope.user = {
            firstName: '',
            lastName: '',
            username: ''
        };

        $scope.save = function () {
            userService.post($scope.user)
                .then(function (result) {
                    debugger;
                })
                .catch(function (err) {
                    debugger;
                });
        }
    });
})
