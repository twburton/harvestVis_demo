function drawMap() {
  var svg = d3.select("#activity-map");
  var stateInfo = d3.map();
  var projection = d3.geoAlbersUsa()
    .scale([1050]);
  var path = d3.geoPath().projection(projection);

  resize();
  d3.select(window).on("resize", resize);

  // Add text labels
  var textLabels = svg.append("g");

  textLabels.append("text")
    .attr("x", 165)
    .attr("y", 15)
    .text("Pacific Flyway");

  textLabels.append("text")
    .attr("x", 185)
    .attr("y", 50)
    .text("107 Days");

  textLabels.append("text")
    .attr("x", 330)
    .attr("y", 15)
    .text("Central Flyway");

    textLabels.append("text")
      .attr("x", 350)
      .attr("y", 50)
      .text("74 Days");

  textLabels.append("text")
    .attr("x", 500)
    .attr("y", 15)
    .text("Mississippi Flyway");

  textLabels.append("text")
    .attr("x", 540)
    .attr("y", 50)
    .text("60 Days");

  textLabels.append("text")
    .attr("x", 700)
    .attr("y", 15)
    .text("Atlantic Flyway");

  textLabels.append("text")
    .attr("x", 720)
    .attr("y", 50)
    .text("60 Days");

  d3.queue()
     .defer(d3.json, "js/us-states.json") // from: http://bl.ocks.org/mbostock/raw/4090846/us.json
     .defer(d3.json, "js/FlywayBoundaryLine.geo.json")
     .defer(d3.csv, "js/States.csv", function(d){ stateInfo.set(d.id, {'name':d.name,
                                                                    'ab':d.abbrev,
                                                                    'duck_bag':d.duck_bag,
                                                                    'duck_hunters':d.duck_hunters,
                                                                    'goose_bag':d.goose_bag,
                                                                    'goose_hunters': d.goose_hunters,
                                                                    'days_afield': d.days_afield});
                                              })
     .await(ready);


  function ready(error, us, FlywayBoundaryLine) {
     if (error) throw error;

     svg.append("g")
         .attr("class", "states")
         .attr("transform", "translate(0, 50)")
       .selectAll("path")
       .data(topojson.feature(us, us.objects.states).features)
       .enter().append("path")
         .attr("d", path)
         .attr("fill", function(d){
           if(d.id === 15){
             return "gray";
           }
         })
         .on("click", function(d){
            // Do not allow clicking of Hawaii
            if(d.id != 15){
              data = stateInfo.get(d.id);
              document.getElementById('state-value').innerHTML= data.name + " has ...";
              document.getElementById('duck-value').innerHTML = Number(data.duck_hunters).toLocaleString();
              document.getElementById('goose-value').innerHTML = Number(data.goose_hunters).toLocaleString();
              document.getElementById('days-value').innerHTML= Number(data.days_afield);
              document.getElementById('duck-bag-value').innerHTML= Number(data.duck_bag);
              document.getElementById('goose-bag-value').innerHTML= Number(data.goose_bag);

               // Find previously selected, unselect
              d3.select(".selected").classed("selected", false);
              // Select current item
              d3.select(this).classed("selected", true);
            }
          });


     svg.append("path")
         .attr("class", "state-borders")
         .attr("transform", "translate(0, 50)")
         .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));

     svg.append("g")
       .attr("class", "flyway")
       .attr("transform", "translate(0, 50)")
       .selectAll("path")
       .data(FlywayBoundaryLine.features)
       .enter().append("path")
         .attr("d", path)
         .attr("fill", "none")
         .attr("stroke", '#666666')
         .attr("stroke-width", "3px");
   };



   function resize() {
     width = $('#map-container').width(), height = $('#map-container').height();
     svg.attr("width", width).attr("height", height)
     svg.size([width, height]);
     console.log(width, height)
   };
}
drawMap();
