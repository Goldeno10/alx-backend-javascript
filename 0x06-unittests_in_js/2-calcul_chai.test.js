const assert = require('assert');
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

const expect = chai.expect;

describe('calculateNumber', () => {
  it('should correctly sum rounded values', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should handle negative values', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4);
  });

  it('shout handle zero value', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('should return Error', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  })
});
