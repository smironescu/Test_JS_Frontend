require.config({
    paths: {
        "d3": 'lib/d3'
    }
});

require(["charts/circleRevenue",
        "charts/circleImpresions",
        "charts/circleVisits"], function(circleRevenue, circleImpresions, circleVisits){

    new circleRevenue(72);
    new circleImpresions(50);
    new circleVisits(175);

});
