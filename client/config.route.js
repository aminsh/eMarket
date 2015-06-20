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
                {url: '/aboutUs', name: 'aboutUs', title: ''},
                {url: '/Category', name: 'categoryList', title: ''},
                {url: '/ad', name: 'adList', title: ''},
                {url: '/ad/show/:id', name: 'adShow', title: ''},
                {url: '/ad/create', name: 'adCreate', title: ''},
                {url: '/ad/edit/:id', name: 'adEdit', title: ''},
                {url: '/ad/success/:id', name: 'adSuccess', title: ''},
                {url: '/user/register', name: 'userRegister', title: ''},
                {url: '/user/register/success', name: 'userRegisterSuccess', title: ''},
                {url: '/user/login', name: 'userLogin', title: ''},
                {url: '/user/ads/', name: 'userAds', title: ''}
            ];

            var route = routeResolveProvider.route;

            routes.forEach(function (r) {
                $routeProvider.when(r.url, route.resolve(r.name));
            });
            $routeProvider.otherwise({redirectTo: '/'});

            //$locationProvider.html5Mode(true);
        }
});

