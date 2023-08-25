const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should correctly sum rounded values', function () {
    assert.strictEqual(calculateNumber(3.7, 2.2), 6);
  });

  it('should handle negative values', function () {
    assert.strictEqual(calculateNumber(5.2, -4.8), 0);
  });

  it('shout handle zero value', function () {
    assert.strictEqual(calculateNumber(0, 4.1), 4);
  })

});

