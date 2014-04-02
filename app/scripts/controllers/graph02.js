'use strict';

angular.module('datavizApp')
  .controller('Graph02Ctrl', function ($scope) {
    $scope.dataGraph02 = [3, 6, 2, 7, 5, 2, 0, 3, 8, 9];

    $scope.addDataGraph02 = function(newValue) {
        $scope.dataGraph02.push(newValue);
    }
  });
