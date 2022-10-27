const {
    splitMyString, 
    checkIfWordIsLongerThanFiveCharacters
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
            expect(checkIfWordIsLongerThanFiveCharacters("Hey")).toEqual(false);
        });
        
    });
});