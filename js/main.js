require.config({
    paths: {
        "d3": 'lib/d3'
    }
});

require(["charts/circleRevenue",
        "charts/circleImpresions",
        "charts/circleVisits"], function(circleRevenue, circleImpresions, circleVisits){

    new circleRevenue(47, "#007007", "#00e32f");
    new circleImpresions(70, "#005369", "#00ceed");
    new circleVisits(70, "#e94c00", "#ffc800");

});
