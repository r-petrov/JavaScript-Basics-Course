/**
 * Created by PC on 17.01.2016 г..
 */
"use strict";
function extractObjects(array) {
    var output = new Array;
    input.forEach(function(element){
        if(typeof element === 'object' && !element.indexOf){
            output.push(element);
        }
    });

    return output;
}

var input = [
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
];

var output = extractObjects(input);

console.log(output);