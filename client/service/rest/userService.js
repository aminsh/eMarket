define(['app'],function(app){
    (app.register || app).factory('userService', function($http , $q){
        return{
            getById: function(id){
                var deferred = $q.defer();

                $http.get('/api/users/' + id)
                    .success(function(data){
                        deferred.resolve(data);
                    })
                    .error(function(error){
                        deferred.reject(error);
                    });

                return deferred.promise;
            },
            current: function(){
                var deferred = $q.defer();

                $http.get('/api/users/current')
                    .success(function(data){
                        deferred.resolve(data);
                    })
                    .error(function(error){
                        deferred.reject(error);
                    });

                return deferred.promise;
            },
            post: function(user){
                var deferred = $q.defer();

                $http.post('/api/users/', user)
                    .success(function(result){
                        deferred.resolve(result);
                    })
                    .error(function(error){
                        deferred.reject(error);
                    });

                return deferred.promise;
            },
            put: function(id, ad){
                var deferred = $q.defer();

                $http.put('/api/ads/' + id, ad)
                    .success(function(result){
                        deferred.resolve(result);
                    })
                    .error(function(error){
                        deferred.reject(error);
                    });

                return deferred.promise;
            },
            login: function(username, password){
                var deferred = $q.defer();

                $http.post('/api/users/login', {username: username, password: password})
                    .success(function(result){
                        deferred.resolve(result);
                    })
                    .error(function(error){
                        deferred.reject(error);
                    });

                return deferred.promise;
            },
            logout: function () {
                var deferred = $q.defer();

                $http.post('/api/users/logout')
                    .success(function(result){
                        deferred.resolve(result);
                    })
                    .error(function(error){
                        deferred.reject(error);
                    });

                return deferred.promise;
            }
        }
    });
});
