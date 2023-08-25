const chai = require('chai');
const assert = chai.assert;
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    // Stub Utils.calculateNumber to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and the spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with the correct arguments', () => {
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with the expected arguments
    assert.isTrue(calculateNumberStub.calledOnceWith('SUM', 100, 20));
  });

  it('should log the correct message to the console', () => {
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the expected message
    assert.isTrue(consoleLogSpy.calledOnceWith('The total is: 10'));
  });
});
