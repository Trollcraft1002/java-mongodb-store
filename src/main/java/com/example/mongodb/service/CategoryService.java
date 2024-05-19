package com.example.mongodb.service;

import com.example.mongodb.model.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    List<Category> getAllCategories();
    Optional<Category> getCategoryById(String id);
    Category saveCategory(Category category);
    void deleteCategoryById(String id);
}
