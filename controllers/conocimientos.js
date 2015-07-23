'use strict';

angular.module('myApp.conocimientosCtrl', [])

.controller('ConocimientosCtrl', ['$scope', 'ConocimientosService', function($scope, ConocimientosService) {
        ConocimientosService.query(function(data){
            $scope.conocimientos = data;
        });
}]);
