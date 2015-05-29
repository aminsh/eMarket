define(['app', 'service/rest/userService', 'directives/modal'], function (app) {
    (app.register || app).controller('shell', function shellController($scope, $rootScope, userService ,logger) {
        $scope.title = "پوسته اصلی برنامه";

        $rootScope.auth = {
            isAuth: false,
            user: {}
        };

        userService.current()
            .then(function (result) {
                if (!result.isAuthenticated) return;
                $rootScope.auth.isAuth = true;
                $rootScope.auth.user = result.user;
            });

        $scope.logout = function () {
            userService.logout()
                .then(function (result) {
                    if(result.success){
                        $scope.auth.isAuth = false;
                        $scope.auth.user = {};
                        logger.success();
                    }
                })
        }
    })
});
