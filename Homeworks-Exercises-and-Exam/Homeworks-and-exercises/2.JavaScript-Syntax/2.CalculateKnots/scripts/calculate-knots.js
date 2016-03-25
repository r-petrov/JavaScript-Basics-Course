/**
 * Created by PC on 10.01.2016 г..
 */
"use strict";
const COEFFICIENT = 1.852;
var input = process.argv.slice(2);
var kmPerHour = input[0];
var outputKnots = kmPerHour / COEFFICIENT;
outputKnots = outputKnots.toFixed(2);
console.log(outputKnots);