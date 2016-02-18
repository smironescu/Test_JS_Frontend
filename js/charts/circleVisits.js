define(["../lib/d3"], function (d3) {

    var drawCircleRevenue = function(cx){
        var revenueCircleSelect = d3.select("#visitsCircle"),
            calculateRange = parseInt(cx) - 75,
            svg = revenueCircleSelect.append("svg")
                .attr("width", 150)
                .attr("height", 150)
                .attr("style", "margin-left: -"+calculateRange+"px")
                .append("circle")
                .attr("cx", cx)
                .attr("cy", 75)
                .attr("r", 75)
                .style("stroke", "yellow")
                .style("fill", "none");
    };

    return drawCircleRevenue;
});
