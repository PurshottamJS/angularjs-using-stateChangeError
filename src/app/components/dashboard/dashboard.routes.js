;
(function(window, angular, undefined) {
    angular
        .module('app.dashboard')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider.state("dashboard", {
                url: "/dashboard",
                controller: "DashboardController as dashboard",
                // this is the place where to resolve dynamic template
                templateProvider: function($templateCache) {
                    // simplified, expecting that the cache is filled
                    // there should be some checking... and async $http loading if not found
                    return $templateCache.get('components/dashboard/dashboard.template.html');
                },
                resolve: {
                    dep1: function($q, $timeout) {
                        var defer = $q.defer();
                        $timeout(function() {
                            defer.reject("1st Dependency Failed.");
                        }, 2000)
                        return defer.promise;
                    },
                    dep2: function($q, $timeout) {
                        var defer = $q.defer();
                        $timeout(function() {
                            defer.reject("2nd Dependency Failed.");
                        }, 2000)
                        return defer.promise;
                    }
                }
            })
        });
}(window, angular, undefined));
