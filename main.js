var app = angular.module('myApp', ['myApp']);
app.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.transitionOn = false;
    $scope.property = 'all';
    $scope.duration = '1s';
    $scope.delay = '0s';
    $scope.setRule = function() {
        setTimeout(function() {
        	console.log($scope.transitionOn);
            if ($scope.transitionOn) {
                var property = angular.copy($scope.property);
                var duration = angular.copy($scope.duration);
                var delay = angular.copy($scope.delay);
                console.log($scope.property);
                $scope.transitionRule = 'transition-' + property + '-' + duration + '-' + delay;
            }
            else{
            	$scope.transitionRule='';
            }
            console.log($scope.transitionRule);
        }, 100);
    };
    $scope.setRule();
}])
