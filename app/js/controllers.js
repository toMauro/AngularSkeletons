'use strict';

/* Controllers */
var mainApp = angular.module('mainApp', []);

mainApp.controller('mainController', ['$scope', function($scope) {
  $scope.test = "hello Angular";
}]);