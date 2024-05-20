// frontend/src/components/ProductCard.js

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';

const ProductCard = ({ product, onDelete }) => {
  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <CardMedia
            component="img"
            height="80"
            image={product.imageUrl}
            alt={product.name}
            style={{ objectFit: 'contain' }}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Quantity: {product.quantity}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={2} container alignItems="center" justifyContent="center">
          <Button variant="contained" color="secondary" onClick={() => onDelete(product.id)}>
            Delete
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductCard;
