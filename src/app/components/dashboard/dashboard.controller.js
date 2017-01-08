;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);
    DashboardController.$inject = ['dep1', 'dep2'];

    function DashboardController(dep1, dep2) {
        var vm = this;
        console.log(dep1);
        console.log(dep2);
    }
}(window, angular, undefined));
