/**
 * Created by PC on 17.01.2016 г..
 */
"use script";
function sortLetters(string, boolean) {
    var charArray = string.split('');
    charArray.sort(function(a, b) {
        return a.toLowerCase() > b.toLowerCase();
    });
    if(boolean) {
        return charArray;
    }
    else {
        return charArray.reverse();
    }
}

console.log(sortLetters('HelloWorld', true));
console.log(sortLetters('HelloWorld', false));