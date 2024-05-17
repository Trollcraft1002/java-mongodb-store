package com.example.mongodb.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collation = "products")
public class Product {
@Id
private String id;
    private String name;
    private double price;
    private int quantity;
    private String categoryId;  // Link to the Category entity
    private String supplierId;  // Link to the Supplier entity
    private String imageUrl;


    public Product(String id, String name, double price, int quantity, String categoryId, String supplierId, String imageUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.categoryId = categoryId;
        this.supplierId = supplierId;
        this.imageUrl = imageUrl;
    }
}

