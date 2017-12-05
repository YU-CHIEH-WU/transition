var app = angular.module('myApp', ['myApp']);
app.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.transitionOn = false;
}])
