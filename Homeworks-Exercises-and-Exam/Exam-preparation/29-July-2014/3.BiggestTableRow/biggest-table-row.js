/**
 * Created by PC on 26.01.2016 г..
 */
function solve(arr) {
    "use script";
    var maxSum = -9007199254740992;
    var maxSumStores = [];
    for (var index = 2; index < arr.length; index++) {
        var currentSum = 0;
        var line = arr[index];
        var stores = getStores(line);
        if (stores.length > 0) {
            currentSum = calculateStores(stores);
            if (currentSum > maxSum) {
                maxSum = currentSum;
                maxSumStores = stores;
            }
        }
    }

    if (maxSum > -9007199254740992) {
        printStores(maxSumStores);
    }
    else {
        console.log('no data');
    }

    function getStores (line) {
        var stores = [];
        var regex = /<td>(\-?\d+\.?\d*)/g;
        var match;
        while (match = regex.exec(line)) {
            stores.push(match[1]);
        }

        return stores;
    }

    function calculateStores (stores) {
        var sum = 0;
        for (var index in stores) {
            sum += Number(stores[index]);
        }

        return sum;
    }

    function printStores (stores) {
        var output = maxSum + ' = ' + stores.join(' + ');

        console.log(output);
    }
}

var arr = [ '<table>',
    '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
    '<tr><td>Pleven</td><td>-100</td><td>-200</td><td>-</td></tr>',
    '<tr><td>Varna</td><td>-100</td><td>-</td><td>-300</td></tr>',
    '<tr><td>Rousse</td><td>-</td><td>-200</td><td>-100</td></tr>',
    '</table>' ];

solve(arr);