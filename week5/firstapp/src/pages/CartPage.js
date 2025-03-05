import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartPage = ({ cart }) => {
  return (
    <Container>
      <h2 className="my-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
          <Link to="/checkout">
            <Button variant="success">Checkout</Button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default CartPage;
