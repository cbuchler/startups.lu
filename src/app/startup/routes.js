/**
 * Created by alexis on 16/11/14.
 */

(function () {
    'use strict';

    angular
        .module('app.startup')
        .config(function ($stateProvider) {
            console.debug('Configuring routes for app.startup module');

            $stateProvider
                // === Startup ===
                .state('main.startup', {
                    url: '/startup',
                    template: '<ul><li ng-repeat="startup in startupList" ng-bind="startup.name"></li></ul>',
                    controller: function ($scope, startupList) {

                        $scope.startupList = startupList;
                    },
                    resolve: {
                        startupList: function (Startup) {
                            return Startup.query().$promise
                        }
                    }
                })

        })

})();
