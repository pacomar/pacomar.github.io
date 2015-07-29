'use strict';

angular.module('myApp.proyectosCtrl', [])

.controller('ProyectosCtrl', ['$scope', 'ProyectosService', function($scope, ProyectosService) {
    ProyectosService.query(function(data){
        $scope.proyectos = data;
    });
}]);
