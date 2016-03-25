/**
 * Created by PC on 28.01.2016 г..
 */
function solve(arr) {
    "use strict";
    var ores = {
        silver: 0,
        gold: 0,
        diamonds: 0,
        toString: function() {
            return '*Silver: ' + this.silver + '\n*Gold: ' + this.gold + '\n*Diamonds: ' + this.diamonds;
        }
    };

    for(var index in arr) {
        var line = arr[index];
        if(checkIsOre(line)) {
            var formatedLine = line.replace(/\s*/g, '');
            var oreInfo = formatedLine.split(/[\-:]/g);
            var oreType = oreInfo[oreInfo.length - 2];
            var oreQuantity = Number(oreInfo[oreInfo.length - 1]);
            calculateOres(oreType, oreQuantity);
        }
    }

    function checkIsOre(ore) {
        var isOre = false;
        var regex = /mine.*\-\s*(silver|gold|diamonds)\s*:\s*\d+/g;
        if(regex.test(ore)) {
            isOre = true;
        }

        return isOre;
    }

    function calculateOres(type, quantity) {
        switch (type) {
            case 'silver':
                ores.silver += quantity;
                break;
            case 'gold':
                ores.gold += quantity;
                break;
            case 'diamonds':
                ores.diamonds += quantity;
                break;
        }
    }

    console.log(ores.toString());
}

var arr = [ 'mine bobovDol - gold : 10',
    'mine medenRudnik - silver : 22',
    'mine chernoMore - shrimps : 24',
    'gold:50' ];

solve(arr);