const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

/**
 * CONFIGURE .env file FOR PRODUCTION
 */
if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.config();
}

/**
 * Stripe configartion
 */
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

/**
 * EXPRESS APPLICATION
 */
// Instantiate express application
const app = express();
// Set server port to env.PORT or 5000 otherwise
const port = process.env.PORT || 5000;
// Process the incomming request's body tags and convert them to json
app.use(bodyParser.json());
// Make sure urls contain the right characters
app.use(bodyParser.urlencoded({ extended: true }));
// Cross Origin Requests Setup
app.use(cors());

// If server is in production, serve build folder from client, which incldues all the static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Serve for any url
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Listen to port 5000 & handle error
app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ', +port);
});

// Payment route
app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  // Make stripe charge
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
