/**
 * Created by PC on 14.01.2016 г..
 */
"use strict";
// make person constructor
function Person(fName, lName, age) {
    return {
        firstName: fName,
        lastName: lName,
        age: age,
        toString: function() {
            return this.firstName + ' ' + this.lastName + '(age ' + this.age + ')';
        }
    }
}

// create array if persons
var people = [
    new Person("Scott", "Guthrie", 38),
    new Person("Scott", "Johns", 36),
    new Person("Scott", "Hanselman", 39),
    new Person("Jesse", "Johns", 57),
    new Person("Jon", "Skeet", 36)
];

// group the array of persons by chosen criteria
function groupBy(arr, criteria) {
    var groups = [];
    for (var index = 0; index < arr.length; index++) {
        var person = arr[index];
        var personKeys = Object.keys(person);
        if(personKeys.indexOf(criteria) === -1) {
            console.log('The people have no such property as criteria you have entered!');
            return;
        }
        else {
            var groupKey = person[criteria];
            if(groups[groupKey] === undefined) {
                groups[groupKey] = new Array;
            }
            groups[groupKey].push(person);
        }
    }
    return groups;
}

// print the groups
function printGroups(criteria) {
    var groupedByCriteria = groupBy(people, criteria);
    for(var key in groupedByCriteria) {
        console.log('Group ' + key + ' : [' + groupedByCriteria[key].join(', ') + ']');
    }
}

    // print groups by first name
printGroups('firstName');
console.log('\n');
    // print groups by last name
printGroups('lastName');
console.log('\n');
    // print groups by age
printGroups('age');
console.log('\n');