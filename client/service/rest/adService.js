define(['app'],function(app){
    app.register.factory('adService', function($http , $q){
        return{
            get: function(){
                var deferred = $q.defer();

                $http.get('/api/ads')
                    .success(function(data){
                        deferred.resolve(data);
                    })
                    .error(function(error){
                        deferred.reject(error);
                    });

                return deferred.promise;
            },
            getById: function(id){
                var deferred = $q.defer();

                $http.get('/api/ads/' + id)
                    .success(function(data){
                        deferred.resolve(data);
                    })
                    .error(function(error){
                        deferred.reject(error);
                    });

                return deferred.promise;
            },
            post: function(ad){
                var deferred = $q.defer();

                $http.post('/api/ads/', ad)
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
            remove: function(id){
                var deferred = $q.defer();

                $http.delete('/api/ads/'+ id)
                    .success(function(result){
                        deferred.resolve(result);
                    })
                    .error(function(){
                        deferred.reject(error);
                    });
            }
        }
    });
});