// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function (breed, callback) {
    console.log('breedDetailsFromFile: Calling readFile...');
    fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
        // CHANGE 1: Pass data back via callback instead of return.
        console.log('Callback: I have the data!')
        if (!error) callback(data);
    });
}

module.exports = breedDetailsFromFile;
