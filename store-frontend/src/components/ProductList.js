// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { Grid, Container, TextField } from '@mui/material';
import ProductCard from './ProductCard';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    let response; 
    try {
   response = await axios.get('http://localhost:8080/api/products');
    } catch(error){

    }
    console.log(response)
    setProducts(response.data);
  };

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (searchQuery) {
//       const response = await axios.get(`http://localhost:8080/api/products/search?name=${searchQuery}`);
//       setProducts([response.data]);
//     } else {
//       fetchProducts();
//     }
//   };

  return (
    <Container>
      {/* <form onSubmit={handleSearch}>
        <TextField
          label="Search by Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form> */}
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
