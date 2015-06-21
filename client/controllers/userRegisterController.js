define(['app',
    'service/rest/userService',
], function (app) {
    app.register.controller('userRegisterController', function ($scope, userService, $location) {
        $scope.title = 'ثبت نام';
        $scope.user = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            confirmPassword: ''
        };

        $scope.save = function () {
            userService.post($scope.user)
                .then(function (result) {
                    debugger;
                    $location.path('user/register/success');
                }).catch(function (error) {

                });
        }
    });
});
