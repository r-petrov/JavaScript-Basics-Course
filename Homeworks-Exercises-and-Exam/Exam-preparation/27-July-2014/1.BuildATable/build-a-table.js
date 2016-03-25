/**
 * Created by PC on 19.01.2016 г..
 */

function solve(args) {
    "use script";
    var start = Number(args[0]);
    var end = Number(args[1]);

    /*var fib = function(numMax){
        var f = [0, 1];
        for(var index = 2; index <= numMax; index++){
            f[index] = f[index - 2] + f[index - 1];
        }

        return f;
    };*/

    function isFib(val) {
        var isFib = false;
        var prev = 0;
        var curr = 1;
        while (prev <= val) {
            if (prev == val) {
                isFib = true;
            }
            curr = prev + curr;
            prev = curr - prev;
        }

        return isFib;
    }

    //var fibNums = fib(end);

    console.log('<table>');
    console.log('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
    for (var number = start; number <= end; number++) {
        var squareNumber = number * number;
        var isFibonnachiNumber = isFib(number); //fibNums.indexOf(number) >= 0;
        console.log(('<tr><td>' + number + '</td>') + ('<td>' + squareNumber + '</td><td>') + (isFibonnachiNumber ? 'yes' : 'no') + ('</td></tr>'));
    }

    console.log('</table>');

    /*function buildOutput(startNum, endNum) {
        var output = '<table>\n' +
            '<tr><th>Num</th><th>Square</th><th>Fib</th></tr>\n';
        for (var number = startNum; number <= endNum; number++) {
            var squareNumber = number * number;
            var isFibonnachiNumber = isFib(number); //fibNums.indexOf(number) >= 0;
            output += ('<tr><td>' + number + '</td><td>') + (squareNumber) + ('</td><td>') + (isFibonnachiNumber ? 'yes' : 'no') + ('</td></tr>\n');
        }

        output += '</table>';

        return output;
    }

    var table = buildOutput(start, end);
    console.log(table);*/
}

var input = [2, 6];
solve(input);
