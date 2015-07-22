'use strict';

angular.module('myApp.proyectos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/proyectos', {
    templateUrl: 'views/proyectos/proyectos.html',
    controller: 'ProyectosCtrl'
  });
}])

.controller('ProyectosCtrl', [function() {

}]);