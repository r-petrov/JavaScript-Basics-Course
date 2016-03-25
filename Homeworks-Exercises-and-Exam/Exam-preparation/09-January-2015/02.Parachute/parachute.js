/**
 * Created by PC on 29.01.2016 г..
 */
function solve(arr) {
    "use strict";
    var jumperPositionY,
        jumperPositionX;
    for (var lineNumber = 0; lineNumber < arr.length; lineNumber++) {
        var line = arr[lineNumber];
        if(line.indexOf('o') >= 0) {
            jumperPositionY = lineNumber;
            jumperPositionX = line.indexOf('o');
            break;
        }
    }

    for (jumperPositionY++; jumperPositionY < arr.length; jumperPositionY++) {
         var height = arr[jumperPositionY];
         var leftWindStrength = countNumberOfSymbols('>', height);
         var rightWindStrength = countNumberOfSymbols('<', height);
         var totalDirection = leftWindStrength - rightWindStrength;
         jumperPositionX += totalDirection;
         var jumperPosition = height[jumperPositionX];
         if (jumperPosition === '-' || jumperPosition === '<' || jumperPosition === '>') {
            continue;
         }
         else {
             printLanding(jumperPosition);
             break;
         }
    }

    function printLanding(jumperPosition) {
        switch (jumperPosition) {
            case '/':
            case '|':
            case '\\':
                console.log('Got smacked on the rock like a dog!\n' + jumperPositionY + ' ' + jumperPositionX);
                break;
            case '~':
                console.log('Drowned in the water like a cat!\n' + jumperPositionY + ' ' + jumperPositionX);
                break;
            case '_':
                console.log('Landed on the ground like a boss!\n' + jumperPositionY + ' ' + jumperPositionX);
                break;

        }
    }

    function countNumberOfSymbols(symbol, string) {
        var numberCount = 0;
        for (var index = 0; index < string.length; index++) {
            var character = string[index];
            if (symbol.localeCompare(character) === 0) {
                numberCount++;
            }
        }

        return numberCount;
    }
}

var arr = [
    '--------\\---/------<-----',
    '-->------|o|-------------',
    '----->---|-|-------<-----',
    '---------|>|<------------',
    '->-------/--\\<--->-------',
    '<---<---/----\\---->----><',
    '->>>>--/-<--</----<---<-<',
    '-------\\>>><<\\-----------',
    '>-------\\----/-->--------',
    '---------\\__/------------',
];

solve(arr);