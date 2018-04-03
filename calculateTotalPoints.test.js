const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {

    it('should return 131.8p', () => {
        
        const distance = 111.0;
        const hillSize = 109;
        const kPoint = 98;
        const styleNotes = [19.0, 19.5, 19.0, 19.0, 19.0];
        const windFactor = -14.4;
        const gateFactor = 3.2;

        
        const actual = calculateTotalPoints(distance, hillSize, kPoint, styleNotes, windFactor, gateFactor).toFixed(1);
        const expected = 131.8;

        assert.equal(actual, expected);
    });
});