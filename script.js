// U5223-1368

const body = d3.select("body");

body.selectAll("div")
    .data([1, 2, 3, 4, 5])
    .enter()
    .append("div")
    .attr("class", "data-point");