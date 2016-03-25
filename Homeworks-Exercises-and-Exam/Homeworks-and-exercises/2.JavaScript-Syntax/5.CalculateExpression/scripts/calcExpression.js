/**
 * Created by PC on 11.01.2016 г..
 */
"use strict";

function calcExpression() {
    var expression;
    if (document.getElementById('expression').value != null) {
        expression = document.getElementById('expression').value;
        var operandsRegex = /\d+/g;
        var operands = expression.match(operandsRegex);
        var operatorsRegex = /\D/g;
        var operators = expression.match(operatorsRegex);
        var output = calcOutput(operands, operators);
        document.getElementById('output').innerHTML = output;
    }
    else {
        var output = 'Please, enter a valid expression (numbers and operators)';
        document.getElementById('output').innerHTML = output;
    }
}

function calcOutput(operands, operators){
    var expression = '';
    for (var i = 0; i < operands.length; i++){
        if(operators[i] == null) {
            operators[i] = '';
        }

        expression += operands[i] + ' ' + operators [i] + ' ';
    }

    var output = eval(expression);
    return output;
}