define(['app', 'service/rest/userService', 'directives/modal'], function (app) {
    (app.register || app).controller('shell', function shellController($scope, $rootScope, userService) {
        $scope.title = "پوسته اصلی برنامه";

        $rootScope.auth = {
            isAuth: false,
            user: {}
        };

        userService.current()
            .then(function (result) {
                if (!result.isAuthenticated) return;
                $scope.auth.isAuth = true;
                $scope.auth.user = result.user;
            });
    })
});
