/**
 * Created by PC on 26.01.2016 г..
 */
function solve (arr) {
    "use script";
    var table = '<table>\n' +
        '<tr><th>Price</th><th>Trend</th></tr>\n' +
        '<tr><td>' + parseFloat(arr[0]).toFixed(2) + '</td><td><img src="fixed.png"/></td></td>\n';
    /*console.log('<table>');
    console.log('<tr><th>Price</th><th>Trend</th></tr>');
    console.log('<tr><td>' + Number(arr[0]).toFixed(2) + '</td><td><img src="fixed.png"/></td></td>');*/
    if (arr.length > 1) {
        for (var index = 1; index < arr.length; index++) {
            var trendTd = '</td><td><img src="trend.png"/></td></td>\n';
            var currentPrice = parseFloat(arr[index]).toFixed(2);
            var previousPrice =  parseFloat(arr[index - 1]).toFixed(2);
            if (currentPrice - previousPrice < 0) {
                //console.log('<tr><td>' + currentPrice + '</td><td><img src="down.png"/></td></td>');
                trendTd = trendTd.replace('trend', 'down');
            }
            else if (currentPrice - previousPrice === 0) {
                //console.log('<tr><td>' + currentPrice + '</td><td><img src="fixed.png"/></td></td>');
                trendTd = trendTd.replace('trend', 'fixed');
            }
            else {
                //console.log('<tr><td>' + currentPrice + '</td><td><img src="up.png"/></td></td>');
                trendTd = trendTd.replace('trend', 'up');
            }


            table += ('<tr><td>' + currentPrice + trendTd);
        }
    }

    /*console.log('</table>');*/
    table += '</table>';
    console.log(table);
}

var arr = [ '1.33', '1.35', '2.25', '13.00', '0.5', '0.51', '0.5', '0.5', '0.33', '1.05', '1.346', '20', '900', '1500.1', '1500.10', '2000' ];
solve(arr);