define(['app', 'service/rest/userService'], function (app) {
    app.register.controller('userLoginController', function ($scope, $rootScope, userService , $location) {
        $scope.title = 'Ê—Êœ »Â »—‰«„Â «’·?';

        $scope.user = {
            username: '',
            password: ''
        };

        $scope.errorMessage = '';

        $scope.login = function () {
            $scope.errorMessage = '';

            userService.login($scope.user.username, $scope.user.password)
                .then(function (result) {
                    if (result) {
                        $rootScope.auth.isAuth = true;
                        $rootScope.auth.user = result.user;
                        $location.path('/');
                    }else{
                        $scope.errorMessage = result.message;
                    }
                })
        }
    });
});
