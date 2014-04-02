'use strict';

angular.module('datavizApp')
  .directive('graph03', function () {
    return {
      restrict: 'A',
      controller: 'Graph03Ctrl',
      templateUrl: 'views/graph03.html',
      transclude: true,
      replace: true,
      link: function(scope, element, attrs) {

      }
    };
  });
