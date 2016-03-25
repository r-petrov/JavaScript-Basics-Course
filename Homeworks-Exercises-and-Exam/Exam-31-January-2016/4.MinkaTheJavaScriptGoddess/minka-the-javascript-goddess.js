/**
 * Created by PC on 31.01.2016 г..
 */
function solve(arr) {
    "use strict";
    var tasksCollection = {};
    for (var index in arr) {
        var taskInfo = arr[index].split(' & ');
        var taskName = taskInfo[0];
        var taskType = taskInfo[1];
        var taskNumber = 'Task ' + taskInfo[2];
        var score = Number(taskInfo[3]);
        var linesOfCode = Number(taskInfo[4]);
        if (!tasksCollection[taskNumber]) {
            tasksCollection[taskNumber] = {
                tasks: [],
                average: 0,
                lines: 0,
            };
        }

        var currentTask = {
            name: taskName,
            type: taskType,
        };

        tasksCollection[taskNumber].tasks.push(currentTask);
        tasksCollection[taskNumber].average += score;
        tasksCollection[taskNumber].lines += linesOfCode;
    }

    for (var i in tasksCollection) {
        var task = tasksCollection[i];
        var totalPoints = task.average;
        var numberOfTasks = task.tasks.length;
        task.average = calculateAverage(totalPoints, numberOfTasks);
        task.tasks.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });
    }

    /*var tuples = [];

    for (var key in obj) tuples.push([key, obj[key]]);

    tuples.sort(function(a, b) {
        a = a[1];
        b = b[1];

        return a < b ? -1 : (a > b ? 1 : 0);
    });

    for (var i = 0; i < tuples.length; i++) {
        var key = tuples[i][0];
        var value = tuples[i][1];

        // do something with key and value
    }*/

    var tasksForSorting = [];
    for (var key in tasksCollection) {
        var task = tasksCollection[key];
        tasksForSorting.push([key, tasksCollection[key]]);
    }

    tasksForSorting.sort(function(a, b) {
        a = a[1];
        b = b[1];
        if(a.average === b.average) {
            return a.lines - b.lines;
        }
        else {
            return b.average - a.average;
        }
    });

    var output = {};
    for (var taskKey = 0; taskKey < tasksForSorting.length; taskKey++) {
        var key = tasksForSorting[taskKey][0];
        var value = tasksForSorting[taskKey][1];

        output[key] = value;
    }

    console.log(JSON.stringify(output));

    function calculateAverage (totalPoints, numberOfTasks) {
        var average = (totalPoints / numberOfTasks).toFixed(2);
        average = parseFloat(average);
        return average;
    }

}

var arr = [ 'Array Matcher & strings & 4 & 100 & 38',
    'Magic Wand & draw & 3 & 100 & 15',
    'Dream Item & loops & 2 & 88 & 80',
    'Knight Path & bits & 5 & 100 & 65',
    'Basket Battle & conditionals & 2 & 100 & 120',
    'Torrent Pirate & calculations & 1 & 100 & 20',
    'Encrypted Matrix & nested loops & 4 & 90 & 52',
    'Game of bits & bits & 5 & 100 & 18',
    'Fit box in box & conditionals & 1 & 100 & 95',
    'Disk & draw & 3 & 90 & 15',
    'Poker Straight & nested loops & 4 & 40 & 57',
    'Friend Bits & bits & 5 & 100 & 81' ];

solve(arr);