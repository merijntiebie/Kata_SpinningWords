function splitMyString(string) {
    return string.split(" ")
}

function checkIfWordIsLongerThanFiveCharacters(word) {
    if(word.length >= 5) {
        return true;
    }
    return false;
}

module.exports = {
    splitMyString, 
    checkIfWordIsLongerThanFiveCharacters
}