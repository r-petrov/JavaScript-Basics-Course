/**
 * Created by PC on 22.01.2016 г..
 */
function solve(arr) {
    "use strict";
    var concerts = {};

    (function () {
        for (var index in arr) {
            var line = arr[index];
            line = line.replace(/\s+/, ' ').trim();
            var concertInfo = line.split(' | ');
            var band = concertInfo[0];
            var city = concertInfo[1];
            var venue = concertInfo[3];

            if (!concerts[city]) {
                concerts[city] = {};
            }

            if (!concerts[city][venue]) {
                concerts[city][venue] = [];
            }

            if (concerts[city][venue].indexOf(band) === -1) {
                concerts[city][venue].push(band);
            }
        }
    })();

    //concerts = JSON.stringify(concerts);
    function sortConcerts(concertObj) {
        var sortedConcertObj = {};
        var objKeys = Object.keys(concertObj).sort();
        for (var index in objKeys) {
            var key = objKeys[index];
            sortedConcertObj[key] = concertObj[key];
        }

        return sortedConcertObj;
    }

    function sortBands(concerts) {
        for (var index in sortedConcerts) {
            var city = sortedConcerts[index];
            for (var key in city) {
                city[key].sort();
            }
        }
    }

    var sortedConcerts = sortConcerts(concerts);

    for (var key in sortedConcerts) {
        sortedConcerts[key] = sortConcerts(sortedConcerts[key]);
    }

    sortBands(sortedConcerts);

    console.log(JSON.stringify(sortedConcerts));
}

var arr = [ 'ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
    'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
    'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
    'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
    'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
    'Helloween | London | 28-Jul-2014 | Wembley Stadium',
    'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
    'Metallica | London | 03-Oct-2014 | Olympic Stadium',
    'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
    'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium' ];

solve(arr);