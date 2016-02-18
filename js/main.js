require.config({
    paths: {
        "d3": 'lib/d3'
    }
});

require(["charts/circleRevenue",
        "charts/circleImpresions",
        "charts/circleVisits"], function(circleRevenue, circleImpresions, circleVisits){

    new circleRevenue("revenue", 40, "#007007", "#00e32f");
    new circleImpresions("impresions", 60, "#005369", "#00ceed");
    new circleVisits("visits", 20, "#e94c00", "#ffc800");

});
