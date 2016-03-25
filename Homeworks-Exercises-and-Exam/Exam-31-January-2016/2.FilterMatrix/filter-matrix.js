/**
 * Created by PC on 31.01.2016 г..
 */
function solve(arr) {
    "use strict";
    var rowsLengths = [];
    var sequenceLength = Number(arr[arr.length - 1]);
   /* var matrix = [];
    for (var index = 0; index < arr.length - 1; index++) {
        var line = arr[index].split(' ');
        matrix.push(line);
    }

    console.log(matrix);
*/
    var replacer = '';
    for(var a = 0; a < sequenceLength; a++) {
        replacer += '*';
    }

    for (var index = 0; index < arr.length - 1; index++) {
        var row = arr[index];
        var rowLength = row.length;
        rowsLengths.push(rowLength);
    }

    var charSequence = arr.join(' ');
    charSequence = charSequence.split(' ').join('');
    for (var i = 0; i < charSequence.length; i++) {
        var char = charSequence[i];

    }
    /*var repeatingElementsPattern = new RegExp('[A-z0-9]\\' + (sequenceLength - 1), 'g');
    var match;
    while (match = repeatingElementsPattern.exec(charSequence)) {
        var substring = match;
        console.log(substring);
    }

    function changeChars(string, start, end) {
        for (var index = start; index <= end; index++) {
            string[index] = '*';
        }
    }*/

    console.log(charSequence);
}

var arr = [ '3 3 3 2 5 9 9 9 9 1 2',
    '1 1 1 1 1 2 5 8 1 1 7',
    '7 7 1 2 3 5 7 4 4 1 2',
    '2' ];

solve(arr);