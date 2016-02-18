define(["../lib/d3", "drawCircle"], function (d3, drawCircle) {

    var drawCircleRevenue = function(percentage){

        var colors = new drawCircle();
        drawCircle.call(this);

        var color = colors.getColor("blue");
        var totalRevenue = "50.000.000€";

        var smartphonePercent = percentage / 100;
        var smartphoneTotalAmount = ((percentage / 2) * 1000000).toLocaleString() + "€";
        var tabletPercent = 100 - smartphonePercent * 100;
        var tabletTotalAmount = (((100 - smartphonePercent * 100) / 2) * 1000000).toLocaleString() + "€";


        var twoPi = Math.PI * 2;
        var formatPercent = d3.format('.0%');
        var boxSize = (this.radius + this.padding) * 2;


        var countSmartPhone = Math.abs((smartphonePercent - this.startPercent) / 0.01);
        var step = smartphonePercent < this.startPercent ? -0.01 : 0.01;

        var arc = d3.svg.arc()
            .startAngle(0)
            .innerRadius(this.radius)
            .outerRadius(this.radius - this.border);

        var parent = d3.select('div#impresions--circle');

        var svg = parent.append('svg')
            .attr('width', boxSize)
            .attr('height', boxSize);

        var defs = svg.append('defs');

        var filter = defs.append('filter')
            .attr('id', 'fill');

        filter.append('feGaussianBlur')
            .attr('in', 'SourceGraphic')
            .attr('stdDeviation', '7');

        var g = svg.append('g')
            .attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

        var meter = g.append('g')
            .attr('class', 'progress-meter');

        meter.append('path')
            .attr('class', 'background')
            .attr('fill', 'lightblue')
            .attr('d', arc.endAngle(twoPi));

        var foreground = meter.append('path')
            .attr('class', 'foreground')
            .attr('fill', color)
            .attr('fill-opacity', 1)
            .attr('stroke', color)
            .attr('stroke-width', 5)
            .attr('stroke-opacity', 1)
            .attr('filter', 'url(#blur)');

        var front = meter.append('path')
            .attr('class', 'foreground')
            .attr('fill', color)
            .attr('fill-opacity', 1);

        var totalNumberRevenues = meter.append('text')
            .text(totalRevenue)
            .attr('fill', '#000')
            .attr('font-weight', 'bold')
            .attr('text-anchor', 'middle')
            .attr('dy', '.35em');

        var smartPhonePercentSelect = d3.select(".smartphone--percent--impresions");
        var smartPhoneTotalAmountSelect = d3.select(".smartphone--totalAmount--impresions");

        smartPhoneTotalAmountSelect.append("text").text(smartphoneTotalAmount);

        var numberTextSmartPhone = smartPhonePercentSelect.append('text')
            .attr('fill', '#000')
            .attr('font-weight', 'bold')
            .attr('text-anchor', 'middle')
            .attr('dy', '.35em');

        var tabletPercentSelect = d3.select(".tablet--percent--impresions");
        var tabletTotalAmountSelect = d3.select(".tablet--totalAmount--impresions");
        tabletTotalAmountSelect.append("text").text(tabletTotalAmount);
        tabletPercentSelect.append("text").text(tabletPercent+"%");

        var progress = this.startPercent;

        function updateSmartphoneCounter(progress) {
            foreground.attr('d', arc.endAngle(twoPi * progress));
            front.attr('d', arc.endAngle(twoPi * progress));
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
