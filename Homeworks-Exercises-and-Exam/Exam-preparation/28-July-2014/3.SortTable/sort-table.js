/**
 * Created by PC on 25.01.2016 г..
 */
function solve (arr) {
    "use strict";
    var products = [];
    for (var index = 2; index < arr.length - 1; index++) {
        var currentProduct = arr[index];
        var price = getProductPrice(currentProduct);
        var name =  getProcuctName(currentProduct);
        products.push({
            product : currentProduct,
            name : name,
            price : price,
        });
    }

    products.sort(function (a, b) {
        if (a.price !== b.price) {
            return a.price - b.price;
        }
        else {
            return a.name.localeCompare(b.name);
        }
    });

    var output = '<table>\n<tr><th>Product</th><th>Price</th><th>Votes</th></tr>\n';
    for (var key in products) {
        output += (products[key].product + '\n');
    }

    output += '</table>';

    console.log(output);

    function getProductPrice (product) {
        var regex = /<td>(\d+\.?\d*)<\/td>/g;
        var match = regex.exec(product);
        var price = Number(match[1]);

        return price;
    }

    function getProcuctName (product) {
        var regex = /<td>([\w\.\s]+)<\/td>/g;
        var match = regex.exec(product);
        var name = match[1];

        return name;
    }
}

var arr = [ '<table>',
    '<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
    '<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
    '<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
    '<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>',
    '<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
    '<tr><td>Cofee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
    '</table>' ];

solve(arr);