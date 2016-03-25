/**
 * Created by PC on 26.01.2016 г..
 */
function solve (arr) {
    "use script";
    var tetriminos = {
        I: 0,
        L: 0,
        J: 0,
        O: 0,
        Z: 0,
        S: 0,
        T: 0,
    };
    var gameFieldLength = arr[0].length;

    tetriminos.I = countFiguresI(arr);
    tetriminos.L = countFiguresL(arr);
    tetriminos.J = countFiguresJ(arr);
    tetriminos.O = countFiguresO(arr);
    tetriminos.Z = countFiguresZ(arr);
    tetriminos.S = countFiguresS(arr);
    tetriminos.T = countFiguresT(arr);
    console.log(JSON.stringify(tetriminos));

    function countFiguresI (arr) {
        const FIGURE_HEIGHT = 4;
        if (arr.length < FIGURE_HEIGHT) {
            return 0;
        }

        var counter = 0;
        for (var col = 0; col < gameFieldLength; col++) {
            for (var row = 0; row <= arr.length - FIGURE_HEIGHT; row++) {
                if ('o' === arr[row][col] &&
                    arr[row][col] === arr[row + 1][col] &&
                    arr[row + 1][col] === arr[row + 2][col] &&
                    arr[row + 2][col] === arr[row + 3][col]) {
                    counter++;
                }
            }
        }

        return counter;
    }

    function countFiguresL (arr) {
        const FIGURE_HEIGHT = 3;
        const FIGURE_WIDTH = 2;
        if(arr.length < FIGURE_HEIGHT || gameFieldLength < FIGURE_WIDTH) {
            return 0;
        }

        var counter = 0;
        for (var col = 0; col <= gameFieldLength - FIGURE_WIDTH; col++) {
            for (var row = 0; row <= arr.length - FIGURE_HEIGHT; row++) {
                if ('o' === arr[row][col] &&
                arr[row][col] === arr[row + 1][col] &&
                arr[row + 1][col] === arr[row + 2][col] &&
                arr[row + 2][col] === arr[row + 2][col + 1]) {
                    counter++;
                }
            }
        }

        return counter;
    }

    function countFiguresJ (arr) {
        const FIGURE_HEIGHT = 3;
        const FIGURE_WIDTH = 2;
        if(arr.length < 3 || gameFieldLength < FIGURE_WIDTH) {
            return 0;
        }

        var counter = 0;
        for (var col = 1; col < gameFieldLength; col++) {
            for (var row = 0; row <= arr.length - FIGURE_HEIGHT; row++) {
                if ('o' === arr[row][col] &&
                    arr[row][col] === arr[row + 1][col] &&
                    arr[row + 1][col] === arr[row + 2][col] &&
                    arr[row + 2][col] === arr[row + 2][col - 1]) {
                    counter++;
                }
            }
        }

        return counter;
    }

    function countFiguresO (arr) {
        const FIGURE_HEIGHT = 2;
        const FIGURE_WIDTH = 2;
        if (arr.length < FIGURE_HEIGHT || gameFieldLength < FIGURE_WIDTH) {
            return 0;
        }

        var counter = 0;
        for (var col = 0; col <= gameFieldLength - FIGURE_HEIGHT; col++) {
            for (var row = 0; row <= arr.length - FIGURE_HEIGHT; row++) {
                if ('o' === arr[row][col] &&
                    arr[row][col] === arr[row][col + 1] &&
                    arr[row][col + 1] === arr[row + 1][col + 1] &&
                    arr[row + 1][col + 1] === arr[row + 1][col]) {
                    counter++;
                }
            }
        }

        return counter;
    }

    function countFiguresZ (arr) {
        const FIGURE_HEIGHT = 2;
        const FIGURE_WIDTH = 3;
        if (arr.length < FIGURE_HEIGHT || gameFieldLength < FIGURE_WIDTH) {
            return 0;
        }

        var counter = 0;
        for (var col = 0; col <= gameFieldLength - FIGURE_HEIGHT; col++) {
            for (var row = 0; row <= arr.length - FIGURE_HEIGHT; row++) {
                if ('o' === arr[row][col] &&
                    arr[row][col] === arr[row][col + 1] &&
                    arr[row][col + 1] === arr[row + 1][col + 1] &&
                    arr[row + 1][col + 1] === arr[row + 1][col + 2]) {
                    counter++;
                }
            }
        }

        return counter;
    }

    function countFiguresS (arr) {
        const FIGURE_HEIGHT = 2;
        const FIGURE_WIDTH = 3;
        if (arr.length < FIGURE_HEIGHT || gameFieldLength < FIGURE_WIDTH) {
            return 0;
        }

        var counter = 0;
        for (var col = 1; col <= gameFieldLength - FIGURE_HEIGHT; col++) {
            for (var row = 0; row <= arr.length - FIGURE_HEIGHT; row++) {
                if ('o' === arr[row][col] &&
                    arr[row][col] === arr[row][col + 1] &&
                    arr[row][col + 1] === arr[row + 1][col] &&
                    arr[row + 1][col] === arr[row + 1][col - 1]) {
                    counter++;
                }
            }
        }

        return counter;
    }

    function countFiguresT (arr) {
        const FIGURE_HEIGHT = 2;
        const FIGURE_WIDTH = 3;
        if (arr.length < FIGURE_HEIGHT || gameFieldLength < FIGURE_WIDTH) {
            return 0;
        }

        var counter = 0;
        for (var col = 0; col <= gameFieldLength - FIGURE_HEIGHT; col++) {
            for (var row = 0; row <= arr.length - FIGURE_HEIGHT; row++) {
                if ('o' === arr[row][col] &&
                    arr[row][col] === arr[row][col + 1] &&
                    arr[row][col + 1] === arr[row][col + 2] &&
                    arr[row][col + 2] === arr[row + 1][col + 1]) {
                    counter++;
                }
            }
        }

        return counter;
    }
}

var arr = [ '-oo', 'ooo', 'ooo' ];
solve(arr);