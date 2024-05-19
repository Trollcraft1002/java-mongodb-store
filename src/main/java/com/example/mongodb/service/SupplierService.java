package com.example.mongodb.service;

import com.example.mongodb.model.Supplier;

import java.util.List;
import java.util.Optional;

public interface SupplierService {
    List<Supplier> getAllSuppliers();
    Optional<Supplier> getSupplier(String id);
    Supplier saveSupplier(Supplier supplier);
    void deleteSupplier(String id);
}
