/**
 * Created by PC on 17.01.2016 г..
 */
"use strict";
function extractDivs(html) {
    var div = '<div';
    var divCounter = 0;
    var currentIndex = html.indexOf(div);
    while (currentIndex !== -1) {
        divCounter++;
        currentIndex = html.indexOf(div, currentIndex + 1);
    }

    return divCounter;
}

var input = '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head lang="en">\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title>index</title>\n' +
    '    <script src="/yourScript.js" defer></script>\n' +
    '</head>\n<body>\n' +
    '    <div id="outerDiv">\n' +
    '        <div\n' +
    '    class="first">\n' +
    '            <div><div>hello</div></div>\n' +
    '        </div>\n' +
    '        <div>hi<div></div></div>        \n' +
    '        <div>I am a div</div>\n' +
    '    </div>\n' +
    '</body>\n' +
    '</html>';

console.log(extractDivs(input));