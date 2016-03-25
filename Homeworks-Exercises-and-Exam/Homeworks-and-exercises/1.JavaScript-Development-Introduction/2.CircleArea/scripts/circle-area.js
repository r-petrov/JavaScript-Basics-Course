/**
 * Created by PC on 07.01.2016 г..
 */
function calcCircleArea(r) {
    "use strict";
    var circleArea = Math.PI * r * r;
    return circleArea;
}

function writeInDocument(r, area) {
    "use strict";
    document.writeln("<div>r = " + r + "; area = " + area + "</div>");
}

var radiuses = [7, 1.5, 20];
for (var i = 0; i < radiuses.length; i++) {
    var r = radiuses[i];
    var area = calcCircleArea(r);
    writeInDocument(r, area);
}

