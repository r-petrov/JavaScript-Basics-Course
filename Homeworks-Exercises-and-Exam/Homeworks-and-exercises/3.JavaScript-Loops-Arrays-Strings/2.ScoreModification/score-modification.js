/**
 * Created by PC on 13.01.2016 г..
 */
"use strict";
var numbers = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];
var examScores = numbers.filter(function(number) {
    return number >= 0 && number <= 400;
});
var examScoreScales = examScores.map(function(scale) {
    scale = scale - (scale * (20 / 100));
    return scale;
});

examScoreScales.sort(function(a, b) {
    return a > b;
});
console.log(examScoreScales);