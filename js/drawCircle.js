define(["lib/d3"], function (d3) {

    var colorsPalete = function() {
        this.radius = 90;
        this.border = 9;
        this.padding = 10;
        this.startPercent = 0;

        var _colors = ["#007007", "#005369", "#e94c00"];
        this.setColor = function(name) {
            for(var i = 0; i < _colors.length; i++){
                if(_colors[i] === name){
                    return _colors[i] = name;
                }
            }
        }
    };
    return colorsPalete;
});
