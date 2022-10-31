const {
    splitMyString, 
    checkIfWordIsFiveOrMoreCharacters,
    spinMyWord,
    spinMyWords
} = require('../src/template');

describe('This is a test suite that tests the spinning words function. All words that contain 5 or more letters will be reversed', () => {
    describe('In order to reverse those words, we first need to identify the separate words within a phrase', () => {
        it('"Hey fellow warriors" -> ["Hey", "fellow", "warriors"]', () => {
            expect(splitMyString("Hey fellow warriors")).toEqual(["Hey", "fellow", "warriors" ]);
        });
        it('" " -> ["", ""]', () => {
            expect(splitMyString(" ")).toEqual(["", ""]);
        });
    });
    describe('Check if the word is 5 or more characters long', () => {
        it('"Hey" -> false', () => {
            expect(checkIfWordIsFiveOrMoreCharacters("Hey")).toEqual(false);
        });
        it('"Fellow" -> true', () => {
            expect(checkIfWordIsFiveOrMoreCharacters("Fellow")).toEqual(true);
        });
        it('"Fello" -> true', () => {
            expect(checkIfWordIsFiveOrMoreCharacters("Fello")).toEqual(true);
        });
        it('"" -> false', () => {
            expect(checkIfWordIsFiveOrMoreCharacters("")).toEqual(false);
        });

        
    });

    describe('Then we revert the letters in the words, longer than or equal to 5 characters ', () => {
                it('"fellow" -> "wollef"', () => {
            expect(spinMyWord("fellow")).toEqual("wollef");
        });
    });

    describe('Once the words are spinned, we can bring back all the words together', () => {
        
        it('"Hey fellow warriors" => "Hey wollef sroirraw"', () => {
            expect(spinMyWords("Hey fellow warriors")).toEqual("Hey wollef sroirraw")
        });
    });
});