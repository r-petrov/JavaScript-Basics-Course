/**
 * Created by PC on 27.01.2016 г..
 */
function solve (arr){
    "use strict";
    var shipsMoves = arr[arr.length - 1];
    var shipsCoords = arr[arr.length - 2].split(' ');
    var xCoord = Number(shipsCoords[0]);
    var yCoord = Number(shipsCoords[1]);
    for (var move = 0; move <= shipsMoves; move++) {
        var isInsideTheStarSystem = false;
        for (var i = 0; i < arr.length - 2; i++) {
            var currentStarSystem = arr[i].split(' ');
            var starSystemName = currentStarSystem[0];
            var starSystemXCoord = Number(currentStarSystem[1]);
            var starSystemYCoord = Number(currentStarSystem[2]);
            var isInsideTheStarSystem = isInsideStarSystem(xCoord, yCoord, starSystemXCoord, starSystemYCoord);
            if (isInsideTheStarSystem) {
                console.log(starSystemName.toLowerCase());
                break;
            }

        }

        if (!isInsideTheStarSystem) {
            console.log('space');
        }

        yCoord++;
    }

    function isInsideStarSystem (xCoord, yCoord, starsXCoord, starsYCoord) {
        var isInside = false;
        var isInsideXCoord = false;
        var isInsideYcoord = false;
        if (xCoord >= (starsXCoord - 1) && xCoord <= (starsXCoord + 1)) {
            isInsideXCoord = true;
        }

        if (yCoord >= (starsYCoord - 1) && yCoord <= (starsYCoord + 1)) {
            isInsideYcoord = true;
        }

        if (isInsideXCoord && isInsideYcoord) {
            isInside = true;
        }

        return isInside;
    }
}

var arr = [ 'Sirius 3 7', 'Alpha-Centauri 7 5', 'Gamma-Cygni 10 10', '8 1', '6' ];
solve(arr);