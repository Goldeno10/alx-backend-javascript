const chai = require('chai');
const assert = chai.assert;

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the expected object when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Assert that the response matches the expected object
        assert.deepEqual(response, {data: 'Successful response from the API'});
        done(); // Call done to signal the test completion
      })
      .catch((error) => {
        done(error); // Call done with an error if the promise is rejected
      });
  });

  // Ensures that the test completes by calling "done" after all asynchronous operations
  after((done) => {
    // Additional cleanup or teardown code
    done();
  });
});
