// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductTable from './components/ProductTable';
import { Container } from '@mui/material';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleAddProduct = () => {
    // Logic to open a modal or navigate to a new page to add a product
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <ProductTable products={products} onDelete={deleteProduct} onAddProduct={handleAddProduct} />
    </Container>
  );
};

export default App;
