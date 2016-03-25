/**
 * Created by PC on 25.01.2016 г..
 */
function solve (arr) {
    "use strict";
    var command = arr[0];
    var regex = /\d{2,}/g;
    var rotationDegrees = regex.exec(command);
    var rotation = Number(rotationDegrees[0]) % 360;

    var matrix = [];
    for (var index = 1; index < arr.length; index++) {
        matrix.push(arr[index]);
    }

    var longestLength = findLongestLength(matrix);

    var outputMatrix = [];
    switch (rotation) {
        case 0:
            printOutputMatrix(matrix);
            break;
        case 90:
            outputMatrix = rotate90(matrix);
            printOutputMatrix(outputMatrix);
            break;
        case 180:
            outputMatrix = rotate180(matrix);
            printOutputMatrix(outputMatrix);
            break;
        case 270:
            outputMatrix = rotate270(matrix);
            printOutputMatrix(outputMatrix);
            break;
    }

    function findLongestLength (matrix) {
        var longestLength = 0;
        for (var index in matrix) {
            if (matrix[index].length > longestLength) {
                longestLength = matrix[index].length;
            }
        }

        return longestLength;
    }

    function rotate90 (matrix) {
        var outputMatrix = [];
        for (var col = 0; col < longestLength; col++) {
            var currentWord = '';
            for (var row = matrix.length - 1; row >= 0; row--) {
                if(matrix[row][col] === undefined) {
                    currentWord += ' ';
                }
                else {
                    currentWord += matrix[row][col];
                }
            }

            outputMatrix.push(currentWord);
        }

        return outputMatrix;
    }

    function rotate180 (matrix) {
        var outputMatrix = [];
        for (var index = matrix.length - 1; index >= 0; index--) {
            var currentWord = '';
            var whiteSpacesCount = longestLength - matrix[index].length;
            if(whiteSpacesCount > 0) {
                var whiteSpaces = '';
                for (var i = 0; i < whiteSpacesCount; i++) {
                    whiteSpaces += ' ';
                }

                currentWord += whiteSpaces;
            }

            var reversed = matrix[index].split('').reverse().join('');
            currentWord += reversed;
            outputMatrix.push(currentWord);
        }

        return outputMatrix;
    }

    function rotate270 (matrix) {
        var outputMatrix = [];
        for (var col = 0; col < longestLength; col++) {
            var currentWord = '';
            for (var row = 0; row < matrix.length; row++) {
                if(matrix[row][col] === undefined) {
                    currentWord += ' ';
                }
                else {
                    currentWord += matrix[row][col];
                }
            }

            outputMatrix.push(currentWord);
        }

        var reversedOutputMatrix = [];
        for (var index = outputMatrix.length - 1; index >= 0; index--) {
            var currentElement = outputMatrix[index];
            reversedOutputMatrix.push(currentElement);
        }

        return reversedOutputMatrix;
    }

    function printOutputMatrix (matrix) {
        for (var index in matrix) {
            console.log(matrix[index]);
        }
    }
}

var arr = [ 'Rotate(810)', 'js', 'exam' ];
solve(arr);