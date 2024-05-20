// frontend/src/components/ProductRow.js

import React from 'react';
import { TableCell, TableRow, Button } from '@mui/material';

const ProductRow = ({ product, onDelete }) => {
  return (
    <TableRow>
      <TableCell>
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ width: '50px', height: 'auto' }}
        />
      </TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.description}</TableCell>
      <TableCell>{product.quantity}</TableCell>
      <TableCell>${product.price.toFixed(2)}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => onDelete(product.id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ProductRow;
