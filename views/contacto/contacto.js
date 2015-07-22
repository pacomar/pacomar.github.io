'use strict';

angular.module('myApp.contacto', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacto', {
    templateUrl: 'views/contacto/contacto.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);