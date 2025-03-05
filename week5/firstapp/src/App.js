import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [cart, setCart] = useState([]);
  const [addedMessage, setAddedMessage] = useState("");

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setAddedMessage(`${product.name} added to cart!`);
    setTimeout(() => setAddedMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="App">
      <Header />
      {addedMessage && <div className="addedMessage">{addedMessage}</div>}
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
