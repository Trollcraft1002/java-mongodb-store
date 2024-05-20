// frontend/src/components/ProductList.js

import React, { useState } from 'react';
import { Grid, Container, Typography, Fab, Pagination } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ProductCard from './ProductCard';

const ProductList = ({ products, onDelete, onAddProduct }) => {
  const [page, setPage] = useState(1);
  const productsPerPage = 15;
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const paginatedProducts = products.slice((page - 1) * productsPerPage, page * productsPerPage);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Store Management
      </Typography>
      <Grid container spacing={2}>
        {paginatedProducts.map((product) => (
          <Grid item xs={12} key={product.id}>
            <ProductCard product={product} onDelete={onDelete} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(products.length / productsPerPage)}
        page={page}
        onChange={handleChangePage}
        color="primary"
        style={{ marginTop: '20px' }}
      />
      <Fab
        color="primary"
        aria-label="add"
        onClick={onAddProduct}
        style={{ position: 'fixed', bottom: '20px', right: '20px' }}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
};

export default ProductList;
