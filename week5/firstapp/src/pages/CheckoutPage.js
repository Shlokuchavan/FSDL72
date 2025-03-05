import React from 'react';
import { Container, Button } from 'react-bootstrap';

const CheckoutPage = () => {
  return (
    <Container>
      <h2>Checkout</h2>
      <p>Your payment gateway would go here.</p>
      <Button variant="success">Proceed with Payment</Button>
    </Container>
  );
};

export default CheckoutPage;
