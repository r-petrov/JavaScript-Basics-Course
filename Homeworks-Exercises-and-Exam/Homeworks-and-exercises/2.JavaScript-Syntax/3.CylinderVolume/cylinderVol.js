/**
 * Created by PC on 10.01.2016 г..
 */
"use strict";
function calcCylinderVol(arr) {
    var radius = arr[0];
    var height = arr[1];
    var volume = Math.PI * radius * radius * height;
    return volume;
}

var input = process.argv.slice(2);
var cylinderVolume = calcCylinderVol(input);
console.log(cylinderVolume.toFixed(3));