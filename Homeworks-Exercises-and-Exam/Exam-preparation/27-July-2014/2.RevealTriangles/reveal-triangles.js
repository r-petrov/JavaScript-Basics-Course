/**
 * Created by PC on 19.01.2016 г..
 */
function solve(arr) {
    "use strict";
    var inputArray = [];
    var outputArray = [];
    for (var lineIndex in arr) {
        var charArray = arr[lineIndex];
        inputArray.push(charArray.split(''));
        outputArray.push(charArray.split(''))
    }

    function revealTriangles(inputArr, outputArr) {
        for (var row = 1; row < inputArr.length; row++) {
            var maxLength = Math.min(inputArr[row - 1].length - 1, inputArr[row].length - 2);
            for (var col = 0; col < maxLength; col++) {
                var first = inputArr[row - 1][col + 1];
                var second = inputArr[row][col];
                var third = inputArr[row][col + 1];
                var fourth = inputArr[row][col + 2];

                if(first === second && second === third && third === fourth) {
                    outputArr[row - 1][col + 1] = '*';
                    outputArr[row][col] = '*';
                    outputArr[row][col + 1] = '*';
                    outputArr[row][col + 2] = '*';
                }
            }
        }
    }

    function printOutput(outputArr) {
        for (var row in outputArr)
        {
            var currentLine = outputArr[row].join('');
            console.log(currentLine);
        }
    }

    revealTriangles(inputArray, outputArray);
    printOutput(outputArray);
}

var input = ['abcdexgh', 'bbbdxxxh', 'abcxxxxx'];
solve(input);