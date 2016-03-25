/**
 * Created by PC on 10.01.2016 г..
 */
"use strict";
function calculateRoots(a, b, d) {
    var root = (b - Math.sqrt(d)) / (2 * a);
    return root;
}

function writeRoot(root, subscript) {
    document.write("<div>X" + "<sub>" + subscript + "</sub> = " + root + "</div>");
}

var a = prompt('Please enter coefficient a:');
var b = prompt('Please enter coefficient b:');
var c = prompt('Please enter coefficient c:');

var d = b * b - (4 * a * c);
var x1;
var x2;
var subscript;
if(d > 0) {
    x1 = calculateRoots(a, -b, d);
    subscript = "1";
    writeRoot(x1, subscript);
    x2 = calculateRoots(a, b, d);
    subscript = "2";
    writeRoot(x2, subscript);
}
else if(d === 0) {
    x1 = (- b) / (2 * a);
    subscript = "";
    writeRoot(x1, subscript);
}
else {
    document.write("No real roots");
}