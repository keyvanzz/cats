// asyncBreedsTest.js
const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');

describe('#breedDetailsFromFile', () => {
    it('provides, via callback, breed details for the Bombay breed', (done) => {
        breedDetailsFromFile('Bombay', (bombay) => {
            const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
            assert.equal(expectedDesc, bombay);
            done();
        });
    });
    it('provides, via callback, breed details for the Balinese breed', (done) => {
        // CHANGE 2: Value now comes back via callback, not return value
        breedDetailsFromFile('Balinese', (balinse) => {
            const expectedDesc2 = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.";
            assert.equal(expectedDesc2, balinse);
            done();
        });
    });
    it('provides, via callback, passed Saphire file to be passed', (done) => {
        breedDetailsFromFile('Saphire', (saphire) => {
            const expectedDesc3 = "It is just some text to be passed.";
            assert.equal(expectedDesc3, saphire);
            done();
        });
    });
});