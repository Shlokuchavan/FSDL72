import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const ProductPage = () => {
  const { id } = useParams();
  const products = [
    {
      id: 1,
      name: 'iPhone 13',
      price: '$799',
      description: 'Latest iPhone with A15 Bionic chip.',
      image: 'https://via.placeholder.com/300x200?text=Iphone+13',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      price: '$699',
      description: 'Samsung flagship with high-end performance.',
      image: 'https://via.placeholder.com/300x200?text=Galaxy+S21',
    },
    {
      id: 3,
      name: 'OnePlus 9',
      price: '$729',
      description: 'OnePlus flagship with fast charging.',
      image: 'https://via.placeholder.com/300x200?text=OnePlus+9',
    },
  ];

  const product = products.find((product) => product.id === parseInt(id));

  return (
    <Container>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="img-fluid" />
      <p>{product.description}</p>
      <p><strong>{product.price}</strong></p>
      <Button variant="primary">Add to Cart</Button>
    </Container>
  );
};

export default ProductPage;
