var months = [{month:'September', week:35},
              {month:'October',   week:40},
              {month:'November',  week:45},
              {month:'December',  week:50},
              {month:'January',   week:55}],
    HarvestByRegion;

var width = 800, height = 600
    margin = {top: 20, right: 0, bottom: 50, left: 50};
    innerWidth = width - margin.left - margin.right,
    innerHeight = height - margin.top - margin.bottom,
    xScale = d3.scaleBand()
                .rangeRound([0, innerWidth])
                .padding(0.2),
    yScale = d3.scaleLinear()
                .rangeRound([innerHeight, 0]),
    xAxis = d3.axisBottom(xScale)
              .tickSize(0.1),
    yAxis = d3.axisLeft(yScale)
              .ticks(12, "%");

var svg = d3.select("#barchart")
      .attr("width", width)
      .attr("height", height)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

function scale (scaleFactor,width,height) {
        return d3.geoTransform({
          point: function(x, y) {
            //this.stream.point( (x - width/2) * scaleFactor + width/2 , (y - height/2) * scaleFactor + height/2);
            this.stream.point( (x - width/2) * scaleFactor , (y - height/2) * scaleFactor );
      }
    });
}

d3.json("https://d3js.org/us-10m.v1.json", function (error, us){
  var path = d3.geoPath().projection(scale(0.2,300,200))

  svg.append("g")
    .attr("transform", "translate(-65,-100)")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.states).features)
    .enter().append("path")
    .attr("class", function(d){
      val = StateKey[d.id]['region'];
      return val
    })
    .attr("d", path);
});

init();


function init(){
    var data = HarvestByRegion[0];

    xScale.domain(data.values.map(function(d) { return d.week; }));
    //yScale.domain([0, d3.max(data.values, function(d) { return d.h; })]);
    yScale.domain([0, 0.12]);

    svg.append("g")
      .attr("class", "axis axis-x")
      .attr("transform", "translate(0," + innerHeight + ")")
      .call(xAxis)
        .selectAll("text")
        .remove();

    svg.append("g")
        .attr("class", "axis axis-y")
        .call(yAxis);

    svg.append("g")
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 10)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Total Harvest");

    svg.append("g")
      .selectAll("text")
        .data(months).enter()
        .append("text")
          .attr("x", function(d){ return xScale(d.week) + 10; })
          .attr("y", innerHeight + 30)
          .style("text-anchor", "left")
          .text(function(d){ return d.month; });

    var bars = svg.selectAll(".bar")
      .data(data.values);

      bars.enter()
        .append("rect")
          .attr("class", "bar")
          .attr("x", function(d){ return xScale(d.week); })
          .attr("y", function(d) { return yScale(0); })
        	.attr("height", function(d){ return  innerHeight - yScale(0); })
        	.attr("width", xScale.bandwidth());
}

function update(regionIdx){
  var data = HarvestByRegion[regionIdx];

  xScale.domain(data.values.map(function(d) { return d.week; }));
  //yScale.domain([0, d3.max(data.values, function(d) { return d.h; })]);

  var bars = svg.selectAll(".bar")
    .data(data.values);

    bars.enter()
      .append("rect")
        .attr("class", "bar")
        .attr("x", function(d){ return xScale(d.week); })
        .attr("y", function(d) { return yScale(d.h); })
      	.attr("height", function(d){ return  innerHeight - yScale(d.h); })
      	.attr("width", xScale.bandwidth());

    bars.exit().remove();

    bars.transition()
      .attr("y", function(d) { return yScale(d.h); })
      .attr("height", function(d){ return  innerHeight - yScale(d.h); })
      .duration(850);

};

/*function resize() {
  width = window.innerWidth, height = window.innerHeight;
  svg.attr("width", width).attr("height", height)
  svg.size([width, height]);
};*/
