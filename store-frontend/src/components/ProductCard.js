// frontend/src/components/ProductCard.js

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductCard = ({ product, onDelete }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quantity: {product.quantity}
        </Typography>
        <Button variant="contained" color="secondary" onClick={() => onDelete(product.id)}>
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
