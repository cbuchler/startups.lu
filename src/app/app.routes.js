/**
 * Created by alexis on 16/11/14.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider) {

            // For unmatched url
            $urlRouterProvider.otherwise('/');

            // Setup states
            $stateProvider
                .state('main', {
                    abstract: true,
                    templateUrl: 'main.html'
                })
                .state('main.home', {
                    url: '/',
                    template: '<p>Homepage</p>'
                })


        })

})();
