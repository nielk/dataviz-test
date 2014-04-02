'use strict';

angular.module('datavizApp')
  .controller('Graph01Ctrl', function ($scope) {
    $scope.dataChart = [4, 8, 15, 16, 23, 42];
    $scope.test = 23;

    $scope.addData = function(newValue) {
        $scope.dataChart.push(newValue);
    }
  });
