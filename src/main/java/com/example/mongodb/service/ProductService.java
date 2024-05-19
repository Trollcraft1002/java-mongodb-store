package com.example.mongodb.service;

import com.example.mongodb.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    List<Product> getAllProducts();
    Optional<Product> getProductById(String id);
    Product saveProduct(Product product);
    Product updateProduct(Product product);
    void deleteProduct(String id);

}
