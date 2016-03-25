/**
 * Created by PC on 28.01.2016 г..
 */
function solve(arr) {
    "use strict";
    var magicNumber = Number(arr[1]);
    var numbers = [];
    for (var index = 2; index < arr.length; index++) {
        var line = arr[index].split(' ');
        numbers.push(line);
    }

    //calculate the value of key
    var key = 0;
    for (var row = 0; row < numbers.length; row++) {
        var isSumEqual = false;
        for (var col = 0; col < numbers[row].length; col++) {
            var currentNumber = Number(numbers[row][col]);
            var sum = getRowAndColSum(magicNumber, currentNumber, numbers, row, col);
            if (sum > -1) {
                key += (row + col + sum);
                isSumEqual = true;
                break;
            }
        }

        if (isSumEqual) {
            break;
        }
    }

    //decrypt the message
    var message = arr[0].split('');
    for (var i = 0; i < message.length; i++) {
        var currentChar = message[i];
        var currentCharCode = currentChar.charCodeAt(0);
        if (i % 2 === 0) {
            currentCharCode += key;
        }
        else {
            currentCharCode -= key;
        }

        var char = String.fromCharCode(currentCharCode);
        message[i] = char;
    }


    console.log(message.join(''));

    function getRowAndColSum(magicNumber, number, numbers, numberRow, numberCol) {
        var sum = -1;
        var substractNumber = (magicNumber - number).toString();
        for (var row = numberRow; row < numbers.length; row++) {
            var rowNumbers = numbers[row];
            var index = rowNumbers.indexOf(substractNumber);
            if (row === numberRow) {
                index = rowNumbers.lastIndexOf(substractNumber);
                if (index >= 0 && index > numberCol) {
                    sum += (1 + row + index);
                }
            }
            else if (index >= 0) {
                    sum += (1 + row + index);
                }
            }

        return sum;
    }
}

var arr = [ 'Vi`ujr!sihtudts', '0', '0 0 120 300', '100 9 300 100', '1 290 370 100', '10 11 100 550' ];

solve(arr);