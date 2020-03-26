import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_XBi7VtNlXUUqCJ5DqTfCuFwj00yUKlozFX';

  const onToken = token => {
    alert('Payment successful');
    // console.log('Token: ', token);
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment was successful!');
      })
      .catch(error => {
        alert('There was an issue with your payment!');
        console.log('Payment error: ', JSON.parse(error));
      });
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN CLOTHING'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
