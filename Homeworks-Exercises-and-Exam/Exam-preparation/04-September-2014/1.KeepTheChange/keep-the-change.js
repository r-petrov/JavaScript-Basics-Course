/**
 * Created by PC on 27.01.2016 г..
 */
function solve (arr) {
    "use strict";
    var bill = Number(arr[0]);
    var mood = arr[1];
    var tip;
    switch (mood) {
        case 'happy':
            tip = bill * 10 / 100;
            break;
        case 'married':
            tip = bill * 0.05 / 100;
            break;
        case 'drunk':
            tip = bill * 15 / 100;
            var power = String(tip).charAt(0);
            tip = Math.pow(tip, parseInt(power));
            break;
        default:
            tip = bill * 5 / 100;
            break;
    }

    console.log(tip.toFixed(2));
}


var arr = [ '40000.22', 'happy' ];
solve(arr);