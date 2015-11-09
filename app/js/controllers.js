'use strict';

/* Controllers */
var mainApp = angular.module('mainApp', [])
    .run(['$rootScope','$window',
           function($rootScope, $window) {
        $rootScope.running = "Run method"
    }]);


mainApp.controller('mainController', ['$scope', function($scope) {
  $scope.test = "hello Angular";
}])
