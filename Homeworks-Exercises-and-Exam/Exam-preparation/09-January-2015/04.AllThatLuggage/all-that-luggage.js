/**
 * Created by PC on 30.01.2016 г..
 */
function solve(arr) {
    "use strict";
    // collect the info about all luggages
    var luggages = {};
    var delimiter = /\.*\*\.*/g;
    var sortingCriterion = arr[arr.length - 1];
    for (var index = 0; index < arr.length - 1; index++) {
        var luggageInfo = arr[index].split(delimiter),
            ownerName = luggageInfo[0],
            luggageName = luggageInfo[1],
            isFood = luggageInfo[2],
            isDrink = luggageInfo[3],
            isFragile = luggageInfo[4],
            weight = Number(luggageInfo[5]),
            transferredWith = luggageInfo[6],
            type;
        if (isFood === 'true' && isDrink === 'true') {
            continue;
        }
        else if (isFood === 'true') {
            type = 'food';
        }
        else if (isDrink === 'true') {
            type = 'drink';
        }
        else {
            type = 'other';
        }

        if (!luggages[ownerName]) {
            luggages[ownerName] = {}
        }

        luggages[ownerName][luggageName] = {
            kg: weight,
            fragile: isFragile,
            type: type,
            transferredWith: transferredWith
        }
    }

    //sort luggages according to the sorting criteria
    var sortedLuggages;
    switch (sortingCriterion) {
        case 'luggage name':
            for (var name in luggages) {
                var luggageOwner = luggages[name];
                sortedLuggages = sortLuggagesByLuggageName(luggageOwner);
                luggages[name] = sortedLuggages;
            }
            break;
        case 'weight':
            for (var name in luggages) {
                var luggageOwner = luggages[name];
                sortedLuggages = sortLuggagesByLuggageWeight(luggageOwner);
                luggages[name] = sortedLuggages;
            }
            break;
        case 'strict':
            break;
    }

    console.log(JSON.stringify(luggages));

    function sortLuggagesByLuggageWeight(owner) {
        var sortedLuggages = {};
        var luggage = {};
        var ownersLuggages = [];
        for (var luggageName in owner) {
            luggage[luggageName] = owner[luggageName];
            ownersLuggages.push(luggage);
        }
        ownersLuggages.sort(function(a, b) {
            return b.kg - a.kg;
        });

        for (var name in ownersLuggages) {
            sortedLuggages[name] = ownersLuggages[name];
        }

        return sortedLuggages;
    }

    function sortLuggagesByLuggageName (luggageOwner) {
        var sortedLuggages = {};
        var objKeys = Object.keys(luggageOwner).sort();
        for (var index in objKeys) {
            var key = objKeys[index];
            sortedLuggages[key] = luggageOwner[key];
        }

        return sortedLuggages;
    }
}

var arr = [ 'Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack',
    'Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
    'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
    'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
    'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
    'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
    'weight' ];

solve(arr);