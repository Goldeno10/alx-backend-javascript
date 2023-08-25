const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should correctly sum rounded values', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should handle negative values', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('shout handle zero value', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('should return Error', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error')
  })
});
