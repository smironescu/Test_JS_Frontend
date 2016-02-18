define(["lib/d3"], function (d3) {

    var colorsPalete = function() {
        this.radius = 90;
        this.border = 7;
        this.padding = 10;
        this.startPercent = 0;

        var _colors = ["green", "blue", "red"];
        this.getColor = function(name) {
            for(var i = 0; i < _colors.length; i++){
                if(_colors[i] === name){
                    return _colors[i] = name;
                }else{
                    console.log("No color match!!")
                }
            }
        }
    };
    return colorsPalete;
});
