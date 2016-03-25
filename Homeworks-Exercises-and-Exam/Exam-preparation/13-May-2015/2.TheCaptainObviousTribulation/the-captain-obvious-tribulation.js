/**
 * Created by PC on 28.01.2016 г..
 */
function solve(arr) {
    "use strict";
    //get the repeating words from first text
    var repeatedWords = [];
    var firstText = arr[0];
    var firstTextWords = splitSentenceIntoWords(firstText);

    for (var w1 = 0; w1 < firstTextWords.length - 1; w1++) {
        var counter = 1;
        var firstWord = firstTextWords[w1].toLocaleLowerCase();
        for (var w2 = w1 + 1; w2 < firstTextWords.length; w2++) {
            var secondWord = firstTextWords[w2].toLocaleLowerCase();
            if (firstWord === secondWord) {
                counter++;
            }
        }

        if (counter >= 3) {
            if(!(repeatedWords.indexOf(firstWord) >= 0)) {
                repeatedWords.push(firstWord);
            }
        }
    }

    if(repeatedWords.length === 0) {
        console.log('No words');
        return;
    }

    //get array of sentences from second text
    var secondText = arr[1];
    var secondTextSentencies = secondText.match( /[^\.!\?]+[\.!\?]+/g );
    var sentences = getSentencesContainingAtLeastTwoWords(repeatedWords, secondTextSentencies);

    if(sentences.length > 0) {
        console.log(sentences.join('\n'));
    }
    else {
        console.log('No sentences')
    }


    function getSentencesContainingAtLeastTwoWords(words, sentences) {
        var containingSentences = [];
        for (var s in sentences) {
            var counter = 0;
            var sentence = sentences[s];
            var sentenceWords = splitSentenceIntoWords(sentence);
            var lowerCaseSentenceWords = sentenceWords.join(' ').toLocaleLowerCase().split(' ');
            //sentenceWords = sentenceWords.join(' ').toLocaleLowerCase().split(' ');

            for (var w in words) {
                var word = words[w];
                if (lowerCaseSentenceWords.indexOf(word) >= 0) {
                    counter++;
                }
            }

            if (counter >= 2) {
                if(!(containingSentences.indexOf(sentence) >= 0)) {
                    containingSentences.push(sentence);
                }
            }
        }

        return containingSentences;
    }

    function splitSentenceIntoWords(sentence) {
        var words = sentence.split(/[(\.\s)(\?\s)(!\s)(:\s)(,\s)]/g);
        words = words.filter(function(w) {
            return w;
        });

        return words;
    }
}

var arr = ["Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!",
    "The captain was walking and he was obvious. He did not know what was going to happen to you in the future. Was he curious? We do not know."];

solve(arr);