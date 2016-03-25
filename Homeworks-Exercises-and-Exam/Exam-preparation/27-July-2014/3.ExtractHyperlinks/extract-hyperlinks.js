/**
 * Created by PC on 20.01.2016 г..
 */
function solve(args) {
    "use strict";
    var html = args.join('\n');
    var regex = /<a\s*.*\s*href\s*=\s*(['"]?)(\s*\S*\s*)\1\s*.*>/g;
    var matches;
    while (matches = regex.exec(html)) {
        var match = matches[2];
        console.log(match);
    }
}

var args = ['<a', '	href=', '	"https://softuni.bg">', '		SoftUni', '</a>'];

solve(args);
