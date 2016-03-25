/**
 * Created by PC on 25.01.2016 г..
 */
function solve (arr) {
    "use strict";
    function checkForDoubleRakiyaNumbers (numberString) {
        var isDoubleRakiyaNumber = false;
        for (var index = 0; index < numberString.length - 3; index++) {
            var firstNumber = Number(numberString[index] + numberString[index + 1]);
            for (var i = index + 2; i < numberString.length - 1; i++) {
                var secondNumber = Number(numberString[i] + numberString[i + 1]);
                if (firstNumber === secondNumber) {
                    isDoubleRakiyaNumber = true;
                    return isDoubleRakiyaNumber;
                }
            }
        }

        return isDoubleRakiyaNumber;
    }

    var openNumTag = "<li><span class='num'>",
        closeNumTag = "</span></li>",
        openRakiyaTag = "<li><span class='rakiya'>",
        closeRakiyaTAG = '</span><a href="view.php?id=double-rakiya>View</a></li>';

    var startNumber = Number(arr[0]),
        endNumber = Number(arr[1]),
        output = '<ul>\n';
    for (var number = startNumber; number <= endNumber; number++) {
        var numberString = number.toString();
        if ((numberString.length < 4) || (!checkForDoubleRakiyaNumbers(numberString))) {
            output += (openNumTag + numberString + closeNumTag + '\n');
        }
        else if (checkForDoubleRakiyaNumbers(numberString)) {
            var closeRakiyaTag = closeRakiyaTAG.replace('double-rakiya', numberString);
            output += (openRakiyaTag + numberString + closeRakiyaTag + '\n');
        }
    }

    output += '</ul>';
    console.log(output);
}

var arr = [ '11210', '11215' ];
solve(arr);