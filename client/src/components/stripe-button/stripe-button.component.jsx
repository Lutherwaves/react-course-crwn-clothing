import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_XBi7VtNlXUUqCJ5DqTfCuFwj00yUKlozFX';

  const onToken = token => {
    alert('Payment successful');
    console.log('Token: ', token);
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
