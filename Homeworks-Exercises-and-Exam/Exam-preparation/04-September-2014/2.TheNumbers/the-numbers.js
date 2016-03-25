/**
 * Created by PC on 27.01.2016 г..
 */
function solve (arr) {
    "use strict";
    var output = '';
    var message = arr[0];
    var regex = /\d+/g;
    var matches = message.match(regex);
    for (var index in matches) {
        matches[index] = convertNumbers(Number(matches[index]));
    }

    function convertNumbers (number) {
        var numberOfChars = 4;
        var convertedNumber = (number).toString(16).toUpperCase();
        var result = '0x';
        if (convertedNumber.toString().length < numberOfChars) {
            var distinction = numberOfChars - convertedNumber.toString().length;
            for (var i = 0; i < distinction; i++) {
                result += 0;
            }
        }

        result += convertedNumber;
        return result;
    }

    console.log(matches.join('-'));
}

var arr = [ '20' ];
solve(arr);