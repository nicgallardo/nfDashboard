$( document ).ready(function() {
  var m = [80, 80, 80, 80]; // margins
  var w = 1000 - m[1] - m[3]; // width
  var h = 400 - m[0] - m[2]; // height

  var data1 = [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 8, 1, 2, 3, 4, 5, 3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 10, 1, 2, 3, 4];
  var data2 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  var x = d3.scale.linear().domain([0, 31]).range([0, w]);
  var y = d3.scale.linear().domain([0, 10]).range([h, 0]);
  var line = d3.svg.line()
    .x(function(d,i) {
      return x(i);
    })
    .y(function(d) {
      return y(d);
    })
    var graph = d3.select("#graph").append("svg:svg")
          .attr("width", w + m[1] + m[3])
          .attr("height", h + m[0] + m[2])
        .append("svg:g")
          .attr("transform", "translate(" + m[3] + "," + m[0] + ")");
    var xAxis = d3.svg.axis().scale(x).tickSize(-h);
    graph.append("svg:g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + h + ")")
          .call(xAxis);
    var yAxisLeft = d3.svg.axis().scale(y).ticks(10).orient("left");
    graph.append("svg:g")
          .attr("class", "y axis chart-path")
          .attr("transform", "translate(-25,0)")
          .call(yAxisLeft);
      graph.append("svg:path").attr("d", line(data1));
      graph.append("svg:path").attr("d", line(data2));

});
