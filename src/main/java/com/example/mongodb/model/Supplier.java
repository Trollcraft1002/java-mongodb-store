package com.example.mongodb.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection  = "suppliers")
public class Supplier {
    @Id
    private String id;
    private String name;
    private String contactInfo;
}
