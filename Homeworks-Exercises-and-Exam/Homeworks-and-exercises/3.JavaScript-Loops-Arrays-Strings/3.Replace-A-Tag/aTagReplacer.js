/**
 * Created by PC on 13.01.2016 г..
 */
"use strict";
function getATag(str) {
    var regex = /<a.+>.+<\/a>/g;
    var aTag = str.match(regex).toString();

    return aTag;
}

function replaceATag(str) {
    var aTag = getATag(str);
    var urlTag = aTag;
    urlTag = urlTag.replace('<', '[')
        .replace('a', 'URL')
        .replace('>', ']')
        .replace('<', '[')
        .replace('a', 'URL')
        .replace('>', ']');

    return urlTag;
}

var html = '<ul>\n <li>\n  <a href=http://softuni.bg>SoftUni</a>\n </li>\n</ul>';
var aTag = getATag(html);
var urlTag = replaceATag(html);
html = html.replace(aTag, urlTag);

console.log(html);