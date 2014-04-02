'use strict';

angular.module('datavizApp')
  .directive('graph01', function () {
    return {
      restrict: 'A',
      controller: 'Graph01Ctrl',
      templateUrl: 'views/graph01.html',
      transclude: true,
      replace: true,
      link: function(scope, element, attrs) {
        var data = scope.dataChart;

        scope.$watch('dataChart', function (newData) {

        var data = newData; // on récupère les data via le scope du controller

        d3.select('.chart').selectAll('g').remove();

        var width = 420,
           barHeight = 20;

        var x = d3.scale.linear()
           .domain([0, d3.max(data)])
           .range([0, width]);

        var chart = d3.select('.chart')
           .attr('width', width)
           .attr('height', (barHeight + 10) * data.length);

        var bar = chart.selectAll('g')
           .data(data)
           .enter().append('g')
           .attr('transform', function(d, i) { return 'translate(0,' + i * (barHeight + 10) + ')'; });

        bar.append('rect')
           .attr('width', 0).transition().ease("easeOutQuint").duration(1000).attr('width', x)
           .attr('height', barHeight - 1);

        bar.append('text')
           .attr('x', 0).transition().ease("easeOutQuint").duration(1000).attr('x', function(d) { return x(d) - 3})
           .attr('y', barHeight / 2)
           .attr('dy', '.35em')
           .text(function(d) { return d; });

        }, true);
      }
    };
  });
