const chai = require('chai');
const assert = chai.assert;
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log the correct message and be called once with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the expected message
    assert.isTrue(consoleLogSpy.calledOnceWith('The total is: 120'));
  });

  it('should log the correct message and be called once with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    // Assert that console.log was called with the expected message
    assert.isTrue(consoleLogSpy.calledOnceWith('The total is: 20'));
  });
});
