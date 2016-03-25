/**
 * Created by PC on 18.01.2016 г..
 */
"use strict";
function clone(obj) {
    //If a non-object value is passed in, that value is returned
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    //1)A vanilla Javascript method for cloning objects
    var copy = obj.constructor(); // give temp the original obj's constructor
    for (var key in obj) {
        copy[key] = clone(obj[key]);
    }

    //2)A clever exploit of the JSON library to deep-clone objects
    //var copy = JSON.parse(JSON.stringify(obj));

    return copy;
}

function compareObjects(obj, objCopy) {
    var areEqual = obj == objCopy;
    console.log('a == b --> ' + areEqual);
}

var a = {name: 'Pesho', age: 21};
var b = clone(a); // a deep copy
//var b = a; // not a deep copy
compareObjects(a, b);
