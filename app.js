'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.proyectosCtrl',
  'myApp.contactoCtrl',
  'myApp.conocimientosCtrl',
  'myApp.conocimientosService',
  'myApp.proyectosService',
  'myApp.version'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/conocimientos.html',
    controller: 'ConocimientosCtrl'
  });
  $routeProvider.when('/conocimientos', {
    templateUrl: 'views/conocimientos.html',
    controller: 'ConocimientosCtrl'
  });
  $routeProvider.when('/proyectos', {
    templateUrl: 'views/proyectos.html',
    controller: 'ProyectosCtrl'
  });
  $routeProvider.when('/contacto', {
    templateUrl: 'views/contacto.html',
    controller: 'ContactoCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);
