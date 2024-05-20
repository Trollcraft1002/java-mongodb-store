// frontend/src/components/ProductTable.js

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Container,
  Typography,
  Fab,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ProductRow from './ProductRow';

const ProductTable = ({ products, onDelete, onAddProduct }) => {
  const [page, setPage] = useState(1);
  const productsPerPage = 15;
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const paginatedProducts = products.slice((page - 1) * productsPerPage, page * productsPerPage);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedProducts.map((product) => (
              <ProductRow key={product.id} product={product} onDelete={onDelete} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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

export default ProductTable;
