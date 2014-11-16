/**
 * Created by alexis on 16/11/14.
 */

(function () {
    'use strict';

    angular
        .module('app.startup')
        .factory('Startup',
        function (API, $resource) {
            var resourceName = 'startup.json';
            return $resource(API.url + '/' + resourceName);
        }
    )

})();
