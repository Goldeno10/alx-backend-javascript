const express = require('express');
const app = express();

// Middleware to validate :id as a number
app.param('id', (req, res, next, id) => {
  if (!/^\d+$/.test(id)) {
    return res.status(400).send('Invalid cart ID');
  }
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const cartId = req.params.id;
  // Simulate fetching payment methods for the cart with the given :id
  const paymentMethods = `Payment methods for cart ${cartId}`;
  res.send(paymentMethods);
});

if (require.main === module) {
  const server = app.listen(7865, () => {
    console.log('API available on localhost port 7865');
  });
}

module.exports = app;
