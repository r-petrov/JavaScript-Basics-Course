/**
 * Created by PC on 10.01.2016 г..
 */
"use strict";
var input = process.argv.slice(2);
var age = input[0];
var maxAge = input[1];
var favouriteFood = input[2];
var favouriteFoodAmountPerDay = input[3];

function calcSupply(age, maxAge, food, foodPerDay) {
    var days = (maxAge - age) * 365;
    var amountOfFoodForRestOfLife = foodPerDay * days;
    return amountOfFoodForRestOfLife;
}

var amountOfFoodForRestOfLife = calcSupply(age, maxAge, favouriteFood, favouriteFoodAmountPerDay);
console.log(amountOfFoodForRestOfLife + 'kg of ' + favouriteFood + ' would be enough until I am ' + maxAge + ' years old.');