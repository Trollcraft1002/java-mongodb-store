package com.example.mongodb.service;

import com.example.mongodb.model.Supplier;

import java.util.List;
import java.util.Optional;

public interface SupplierService {
    List<Supplier> getAllSuppliers();
    Optional<Supplier> getSupplierById(String id);
    Supplier saveSupplier(Supplier supplier);
    void deleteSupplierById(String id);
}
