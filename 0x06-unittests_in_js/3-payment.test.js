const chai = require('chai');
const assert = chai.assert;
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    assert.isTrue(calculateNumberSpy.calledOnceWith('SUM', 100, 20));
    calculateNumberSpy.restore();
  });
});
