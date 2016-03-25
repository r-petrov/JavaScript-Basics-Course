"use strict";

function newString(symbol, count) {
    var output = '';
    for (var i = 0; i < count; i++) {
        output += symbol;
    }

    return output;
}

function solve(input){
    var n = Number(input[0]),
        stars = n,
        dots = 0,
        i,
        output = "";
    for (i = 0; i < n / 2; i++) {
        output += newString('.', dots);
        output += newString('*', stars);
        output += newString('.', dots);
        output += "\n";
        stars -= 2;
        dots++;
    }
    dots--;
    stars += 2;
    for (i = 0; i < n / 2 - 1; i++) {
        dots--;
        stars += 2;
        output += newString('.', dots);
        output += newString('*', stars);
        output += newString('.', dots);
        output += "\n"
    }
    return output;
}
console.log(solve(['7']));