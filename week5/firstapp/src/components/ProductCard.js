import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text><strong>{product.price}</strong></Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
        <Link to={`/product/${product.id}`} className="btn btn-info mt-2">View Details</Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
