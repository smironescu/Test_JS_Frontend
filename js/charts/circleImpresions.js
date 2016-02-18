define(["../lib/d3", "drawCircle"], function (d3, drawCircle) {

    var drawCircleRevenue = function(circleName, percentage, color, secondaryColor){

        if(percentage > 100){
            var parentNode = d3.select("div#"+circleName+"--circle"),
                childNode = d3.select("div.devices--wrapper--"+circleName),
                warningMessage = "Oops!! The value entered is bigger than 100%";
            return parentNode.append("text").attr("class", "warning--message").text(warningMessage) && childNode.remove();
        }

        var colors = new drawCircle();
        drawCircle.call(this);

        var color = colors.setColor(color),
            totalRevenue = "50.000.000€",
            smartphonePercent = percentage / 100,
            smartphoneTotalAmount = ((percentage / 2) * 1000000).toLocaleString() + "€",
            tabletPercent = 100 - smartphonePercent * 100,
            tabletTotalAmount = (((100 - smartphonePercent * 100) / 2) * 1000000).toLocaleString() + "€";


        var twoPi = Math.PI * 2;
        var formatPercent = d3.format(".0%");
        var boxSize = (this.radius + this.padding) * 2;


        var countSmartPhone = Math.abs((smartphonePercent - this.startPercent) / 0.01);
        var step = smartphonePercent < this.startPercent ? -0.01 : 0.01;

        var arc = d3.svg.arc()
            .startAngle(0)
            .innerRadius(this.radius)
            .outerRadius(this.radius - this.border);

        var parent = d3.select("div#"+circleName+"--circle");

        var svg = parent.append("svg")
            .attr("width", boxSize)
            .attr("height", boxSize);

        var defs = svg.append("defs");

        var filter = defs.append("filter")
            .attr("id", "fill");

        filter.append("feGaussianBlur")
            .attr("in", "SourceGraphic")
            .attr("stdDeviation", "7");

        var g = svg.append("g")
            .attr("transform", "translate(" + boxSize / 2 + "," + boxSize / 2 + ")");

        var meter = g.append("g")
            .attr("class", "progress-meter");

        meter.append("path")
            .attr("class", "background")
            .attr("fill", secondaryColor)
            .attr("d", arc.endAngle(twoPi));

        var foreground = meter.append("path")
            .attr("class", "foreground")
            .attr("fill", color)
            .attr("fill-opacity", 1)
            .attr("stroke", color)
            .attr("stroke-width", 5)
            .attr("stroke-opacity", 1)
            .attr("filter", "url(#blur)");

        var front = meter.append("path")
            .attr("class", "foreground")
            .attr("fill", color)
            .attr("fill-opacity", 1);

        var totalNumberRevenues = meter.append("text")
            .text(totalRevenue)
            .attr("fill", "#444")
            .attr("font-weight", "bold")
            .attr("text-anchor", "middle")
            .attr("dy", ".35em");

        var smartPhonePercentSelect = d3.select(".smartphone--percent--"+circleName);
        var smartPhoneTotalAmountSelect = d3.select(".smartphone--totalAmount--"+circleName);

        smartPhoneTotalAmountSelect.append("text").text(smartphoneTotalAmount);

        var numberTextSmartPhone = smartPhonePercentSelect.append("text")
            .attr("fill", "#000")
            .attr("font-weight", "bold")
            .attr("text-anchor", "middle")
            .attr("dy", ".35em");

        var tabletPercentSelect = d3.select(".tablet--percent--"+circleName);
        var tabletTotalAmountSelect = d3.select(".tablet--totalAmount--"+circleName);
        tabletTotalAmountSelect.append("text").text(tabletTotalAmount);
        tabletPercentSelect.append("text").text(tabletPercent+"%");

        var progress = this.startPercent;

        function updateSmartphoneCounter(progress) {
            foreground.attr("d", arc.endAngle(twoPi * progress));
            front.attr("d", arc.endAngle(twoPi * progress));
            numberTextSmartPhone.text(formatPercent(progress));
        }

        (function loops() {
            updateSmartphoneCounter(progress);

            if (countSmartPhone > 0) {
                countSmartPhone--;
                progress += step;
                setTimeout(loops, 10);
            }
        })();
    };

    return drawCircleRevenue;
});
