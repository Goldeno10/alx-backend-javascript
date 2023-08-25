const request = require('request');
const app = require('./api'); // Import the Express app

describe('Index page', () => {
  it('should return status code 200', (done) => {
    request.get('http://localhost:7865', (error, response) => {
      if (error) return done(error);
      // Assert the status code is 200
      if (response.statusCode !== 200) {
        return done(new Error(`Expected status code 200 but received ${response.statusCode}`));
      }
      done();
    });
  });

  it('should return the correct result', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      if (error) return done(error);
      // Assert the response body is correct
      if (body !== 'Welcome to the payment system') {
        return done(new Error(`Expected 'Welcome to the payment system' but received '${body}'`));
      }
      done();
    });
  });
});
