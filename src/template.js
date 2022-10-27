function splitMyString(string) {
    return string.split(" ")
}

function checkIfWordIsFiveOrMoreCharacters(word) {
    if(word.length >= 5) {
        return true;
    }
    return false;
}

module.exports = {
    splitMyString, 
    checkIfWordIsFiveOrMoreCharacters

}