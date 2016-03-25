/**
 * Created by PC on 13.01.2016 г..
 */
"use strict";
function findIsMostFrequentNumber(arr, frequency) {
    var isMostFrequentNumber = true;
    for(var index = 0; index < arr.length; index++) {
        if(arr[index] > frequency) {
            isMostFrequentNumber = false;
        }
    }
    return isMostFrequentNumber;
}

function findMostFrequentNumber(arr) {
    var frequencies = new Array;
    var mostFrequentNumber;
    for (var index = 0; index < arr.length; index++) {
        var currentNumber = arr[index];
        var frequency = 1;
        for (var i = index + 1; i < arr.length; i++) {
            if (currentNumber === array[i]) {
                frequency++;
            }
        }

        if (findIsMostFrequentNumber(frequencies, frequency)) {
            mostFrequentNumber = currentNumber;
        }

        frequencies.push(frequency);
    }
    return mostFrequentNumber;
}

var array = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];

//filter out the numbers from the array
var outputArray = array.filter(function (element){
    return typeof (element) == 'number';
});

//find the min number
var minNumber = Math.min.apply(Math, outputArray);

//find the max number
var maxNumber = Math.max.apply(Math, outputArray);

//find the most frequent number
var mostFrequentNumber = findMostFrequentNumber(outputArray);

//sort output array in descending order
outputArray.sort(function(a, b) {
    return a < b;
});

console.log('Min number: ' + minNumber);
console.log('Max number: ' + maxNumber);
console.log('Most frequent number: ' + mostFrequentNumber);
console.log('[' + outputArray.join(', ') + ']');