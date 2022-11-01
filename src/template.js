function splitMyString(string) {
    return string.split(" ")
}

function checkIfWordIsFiveOrMoreCharacters(word) {
    return word.length >= 5
}

function spinMyWord(word) {
    var lettersOfWordInArray = word.split("");
    var lettersOfWordInArrayReversed = lettersOfWordInArray.reverse();
    var wordReversed = lettersOfWordInArrayReversed.join("");
    return wordReversed
}

function spinMyWords(sentence) {
    var words = splitMyString(sentence);
                    var newSentenceInArray = []
    for (let index = 0; index < words.length; index++) {
        const word = words[index];
        if (checkIfWordIsFiveOrMoreCharacters(word)) {
            var wordReversed = spinMyWord(word)
            newSentenceInArray.push(wordReversed);
        }  else {newSentenceInArray.push(word)};
    }    
    var newSentence = newSentenceInArray.join(" ")
    return newSentence
}

module.exports = {
    splitMyString, 
    checkIfWordIsFiveOrMoreCharacters,
    spinMyWord,
    spinMyWords

}