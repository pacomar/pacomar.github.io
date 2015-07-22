'use strict';

angular.module('myApp.conocimientos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/conocimientos', {
    templateUrl: 'views/conocimientos/conocimientos.html',
    controller: 'ConocimientosCtrl'
  });
  $routeProvider.when('/', {
    templateUrl: 'views/conocimientos/conocimientos.html',
    controller: 'ConocimientosCtrl'
  });
}])

.controller('ConocimientosCtrl', [function() {

}]);