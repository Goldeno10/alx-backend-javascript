const express = require('express');
const bodyParser = require('body-parser');

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

app.use(bodyParser.json());

// Middleware to set the response content type to JSON
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

// New endpoint to return available payment methods
app.get('/available_payments', (req, res) => {
  const availablePayments = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.json(availablePayments);
});

// New endpoint to handle login
app.post('/login', (req, res) => {
  const userName = req.body.userName;
  res.send(`Welcome ${userName}`);
});

if (require.main === module) {
  const server = app.listen(7865, () => {
    console.log('API available on localhost port 7865');
  });
}

module.exports = app;
