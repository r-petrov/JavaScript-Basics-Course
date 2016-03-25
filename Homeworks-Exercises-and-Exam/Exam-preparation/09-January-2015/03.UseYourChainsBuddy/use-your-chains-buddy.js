/**
 * Created by PC on 29.01.2016 г..
 */
function solve(arr) {
    "use strict";
    var html = arr[0];

    //get all <p> tags
    var regex = /<p>(.*?)<\/p>/g;
    var matches = '',
        match;
    while (match = regex.exec(html)) {
        matches += match[1];
    }

    //replace all characters which are not small letters and numbers with a space
    matches = matches.replace(/[^a-z0-9]+/g, ' ');
    matches = matches.replace(/\s+/g, ' ');
    var chars = manipulateChars(matches);
    console.log(chars.join(''));

    function manipulateChars(string) {
        var chars = [];
        for (var index = 0; index < string.length; index++) {
            var asciiNumber = String(string).charCodeAt(index);
            var char = '';
            if(asciiNumber === 32) {
                char = ' ';
            }
            else if (asciiNumber < 110) {
                asciiNumber += 13;
                char = String.fromCharCode(asciiNumber);
            }
            else {
                asciiNumber -= 13;
                char = String.fromCharCode(asciiNumber);

            }
            chars.push(char);
        }

        return chars;
    }

}

var arr = [ '<html><head><title></title></head><body><h1>Intro</h1><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj punvaf ner nofbyhgryl rffragvny sbe fnsr unaqyvat nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre fnvq guna qbar ohg vs lbh chg ba lbhe gverf </p><div>It is frustrating that you have not put car chains yet... Embarrassing...</div><p>orsber lbh ernpu fabjl ebnqf lbh jvyy znxr lbhe yvsr jnl rnfvre</p></body>' ]

solve(arr);