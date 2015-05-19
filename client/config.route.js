define(['app'], function (app) {
    app.config(['$routeProvider','$locationProvider' ,'$controllerProvider', '$compileProvider', '$filterProvider', '$provide', 'routeResolverProvider', routeConfigurator]);

        function routeConfigurator($routeProvider,$locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, routeResolveProvider) {

            app.register = {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            var routes = [
                {url: '/', name: 'home', title: ''},
                {url: '/Category', name: 'categoryList', title: ''},
                {url: '/ad/create', name: 'createAd', title: ''},
                {url: '/ad/edit/:id', name: 'editAd', title: ''},
                {url: '/ad/success/:id', name: 'successAd', title: ''},
                {url: '/user/register', name: 'registerUser', title: ''}
            ];

            var route = routeResolveProvider.route;

            routes.forEach(function (r) {
                $routeProvider.when(r.url, route.resolve(r.name));
            });
            $routeProvider.otherwise({redirectTo: '/'});

            //$locationProvider.html5Mode(true);
        }
});

