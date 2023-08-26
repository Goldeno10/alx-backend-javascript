const request = require('request');
const app = require('./api'); // Import both the app and server

describe('Index page', () => {
  it('should return status code 200', (done) => {
    request.get('http://localhost:7865', (error, response) => {
      if (error) return done(error);
      if (response.statusCode !== 200) {
        return done(new Error(`Expected status code 200 but received ${response.statusCode}`));
      }
      done();
    });
  });

  it('should return the correct result', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      if (error) return done(error);
      if (body !== 'Welcome to the payment system') {
        return done(new Error(`Expected 'Welcome to the payment system' but received '${body}'`));
      }
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return status code 200 when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response) => {
      if (error) return done(error);
      if (response.statusCode !== 200) {
        return done(new Error(`Expected status code 200 but received ${response.statusCode}`));
      }
      done();
    });
  });

  it('should return status code 404 when :id is NOT a number', (done) => {
    request.get('http://localhost:7865/cart/invalid', (error, response) => {
      if (error) return done(error);
      if (response.statusCode !== 400) {
        return done(new Error(`Expected status code 404 but received ${response.statusCode}`));
      }
      done();
    });
  });

  it('should return payment methods for a valid :id', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      if (error) return done(error);
      if (body !== 'Payment methods for cart 123') {
        return done(new Error(`Expected 'Payment methods for cart 123' but received '${body}'`));
      }
      done();
    });
  });
});
