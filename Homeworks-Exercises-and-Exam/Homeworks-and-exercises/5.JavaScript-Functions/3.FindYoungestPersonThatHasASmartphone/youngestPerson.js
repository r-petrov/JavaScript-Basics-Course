/**
 * Created by PC on 17.01.2016 г..
 */
"use strict";
function findYoungestPerson(array) {
    var peopleWithSmartphones = findPeopleWithSmartphones(array);
    peopleWithSmartphones.sort(function(a, b) {
        return a.age > b.age;
    });

    var yangestPersonWithSmartphone = peopleWithSmartphones[0];

    return yangestPersonWithSmartphone;
}

function findPeopleWithSmartphones(array) {
    var peopleWithSmartphone = array.filter(function(person) {
        return person.hasSmartphone === true;
    });

    return peopleWithSmartphone;
}

var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];

var yangestPersonWithSmartphone = findYoungestPerson(people);

console.log('The youngest person is ' + yangestPersonWithSmartphone.firstname + ' ' + yangestPersonWithSmartphone.lastname);