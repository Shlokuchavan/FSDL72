import React from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'iPhone 13',
      price: '$799',
      description: 'Latest iPhone with A15 Bionic chip.',
      image: 'https://th.bing.com/th/id/OIP.CFUtCvBuwBTnmT6eKxIkFAHaHa?rs=1&pid=ImgDetMain',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      price: '$699',
      description: 'Samsung flagship with high-end performance.',
      image: 'https://th.bing.com/th/id/OIP.Qou6mwsr6zh_7-8HraQDwwHaHa?rs=1&pid=ImgDetMain',
    },
    {
      id: 3,
      name: 'iphone 16',
      price: '$988',
      description: 'Latest iPhone with A18 Bionic chip.',
      image: 'https://media.croma.com/image/upload/v1725959539/Croma%20Assets/Communication/Mobiles/Images/309694_0_w4ttgb.png',
    },

    {
      id: 4,
      name: 'iphone 16 pro cover ',
      price: '$200',
      description: 'Latest iPhone 16 pro Silicon Cover',
      image: 'https://t-mobile.scene7.com/is/image/Tmusprod/195949909115-frontimage',
    },


    {
      id: 5,
      name: 'iphone 16 pro max cover ',
      price: '$250',
      description: 'Latest iPhone 16 pro max Silicon Cover',
      image: 'https://t-mobile.scene7.com/is/image/Tmusprod/195949909115-frontimage',
    },

    {
      id: 6,
      name: 'Samsung S24 cover',
      price: '$300',
      description: 'Latest Cover Collection',
      image: 'https://www.covershop.com.bd/wp-content/uploads/2024/03/spigen-core-armor-case-for-samsung-s24-ultra-2024-1.webp',
    },
  ];

  return (
    <Container>
      <h2 className="my-4">Our Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
