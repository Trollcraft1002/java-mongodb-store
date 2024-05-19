package com.example.mongodb.service.impl;

import com.example.mongodb.model.Supplier;
import com.example.mongodb.repository.SupplierRepository;
import com.example.mongodb.service.SupplierService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class SupplierServiceImpl implements SupplierService {

    private final SupplierRepository supplierRepository;

    public SupplierServiceImpl(SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
    }

    @Override
    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }

    @Override
    public Optional<Supplier> getSupplier(String id) {
        return supplierRepository.findById(id);
    }

    @Override
    public Supplier saveSupplier(Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    @Override
    public void deleteSupplier(String id) {
        supplierRepository.deleteById(id);
    }
}
