'use strict';

angular.module('myApp.proyectosService', ['ngResource'])
    .factory("ProyectosService", ["$resource", function ($resource) {
        return $resource("resources/proyectos.json");
    }]);