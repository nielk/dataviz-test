'use strict';

angular.module('datavizApp')
  .directive('graph02', function () {
    return {
      restrict: 'A',
      controller: 'Graph02Ctrl',
      templateUrl: 'views/graph02.html',
      transclude: true,
      replace: true,
      link: function(scope, element, attrs) {
        var data = scope.dataGraph02;

        scope.$watch('dataGraph02', function (newData) {
        // define dimensions of graph
        var m = [80, 80, 80, 80]; // margins
        var w = 1000 - m[1] - m[3]; // width
        var h = 400 - m[0] - m[2]; // height

        d3.select('#graph').selectAll('svg').remove();

        // create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
        var data2 = [2, 5, 9, 3, 6, 3, 6, 2, 7, 5];
        var data3 = [6, 2, 7, 4, 8, 2, 5, 9, 3, 6];

        // X scale will fit all values from data[] within pixels 0-w
        var x = d3.scale.linear().domain([0, data.length]).range([0, w]);
        // Y scale will fit values from 0-10 within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!)
        var y = d3.scale.linear().domain([0, 10]).range([h, 0]);
            // automatically determining max range can work something like this
            // var y = d3.scale.linear().domain([0, d3.max(data)]).range([h, 0]);

        // create a line function that can convert data[] into x and y points
        var line = d3.svg.line()
            // assign the X function to plot our line as we wish
            .x(function(d,i) {
                // return the X coordinate where we want to plot this datapoint
                return x(i);
            })
            .y(function(d) {
                // return the Y coordinate where we want to plot this datapoint
                return y(d);
            })

        // create a second line
        var line2 = d3.svg.line()
            // assign the X function to plot our line as we wish
            .x(function(d,i) {
                // return the X coordinate where we want to plot this datapoint
                return x(i);
            })
            .y(function(d) {
                // return the Y coordinate where we want to plot this datapoint
                return y(d);
            })

        // create a third line
        var line3 = d3.svg.line()
            // assign the X function to plot our line as we wish
            .x(function(d,i) {
                // return the X coordinate where we want to plot this datapoint
                return x(i);
            })
            .y(function(d) {
                // return the Y coordinate where we want to plot this datapoint
                return y(d);
            })

            // Add an SVG element with the desired dimensions and margin.
            var graph = d3.select("#graph").append("svg:svg")
                  .attr("width", w + m[1] + m[3])
                  .attr("height", h + m[0] + m[2])
                .append("svg:g")
                  .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

            // create yAxis
            var xAxis = d3.svg.axis().scale(x).tickSize(-h).tickSubdivide(true);
            // Add the x-axis.
            graph.append("svg:g")
                  .attr("class", "x axis")
                  .attr("transform", "translate(0," + h + ")")
                  .call(xAxis);


            // create left yAxis
            var yAxisLeft = d3.svg.axis().scale(y).ticks(4).orient("left");
            // Add the y-axis to the left
            graph.append("svg:g")
                  .attr("class", "y axis")
                  .attr("transform", "translate(-25,0)")
                  .call(yAxisLeft);

            // Add the line by appending an svg:path element with the data line we created above
            // do this AFTER the axes above so that the line is above the tick-lines
            graph.append("svg:path").attr("d", line(data)).attr("class", "line01");

            // second line
            graph.append("svg:path").attr("d", line2(data2)).attr("class", "line02");

            //third line
            graph.append("svg:path").attr("d", line3(data3)).attr("class", "line03");

        }, true);
      }
    };
  });
