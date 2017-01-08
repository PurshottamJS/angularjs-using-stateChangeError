;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app')
        .run(run);
    run.$inject = ['$rootScope'];

    function run($rootScope) {
        $rootScope.title = "Angularjs Using $stateChangeError";
        $rootScope.$on('$stateChangeError',
            function(event, toState, toParams, fromState, fromParams, error) {
                console.log("Error from $stateChangeError listener :", error)
            })
    }
}(window, angular, undefined));
