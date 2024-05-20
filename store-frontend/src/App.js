// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './components/ProductCard';
import { Container, Grid } from '@mui/material';

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

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} onDelete={deleteProduct} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
