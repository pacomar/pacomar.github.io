'use strict';

angular.module('myApp.conocimientosService', ['ngResource'])
    .factory("ConocimientosService", ["$resource", function ($resource) {
        return $resource("resources/conocimientos.json");
    }]);