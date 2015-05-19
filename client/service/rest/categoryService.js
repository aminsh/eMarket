define(['app'], function (app) {
    app.register.factory('categoryService', function ($http, $q) {
        return {
            get: function () {
                var deferred = $q.defer();

                $http.get('/api/categories')
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },
            getById: function (id) {
                var deferred = $q.defer();

                $http.get('/api/categories/' + id)
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },
            post: function (category) {
                var deferred = $q.defer();


                $http.post('/api/categories/', category)
                    .success(function (result) {
                        deferred.resolve(result);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },
            put: function (id, category) {
                var deferred = $q.defer();

                $http.put('/api/categories/' + id, category)
                    .success(function (result) {
                        deferred.resolve(result);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            },
            remove: function (id) {
                var deferred = $q.defer();

                $http.delete('/api/categories/' + id)
                    .success(function (result) {
                        deferred.resolve(result);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            }
        }
    });
});
