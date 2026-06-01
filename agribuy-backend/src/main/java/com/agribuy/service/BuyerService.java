package com.agribuy.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.agribuy.entity.Product;
import com.agribuy.repository.ProductRepository;

@Service
public class BuyerService {

    private final ProductRepository productRepository;

    public BuyerService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getProductsByCategory(
            String category) {

        return productRepository.findByCategory(category);
    }

    public List<Product> searchProducts(
            String keyword) {

        return productRepository
                .findByProductNameContainingIgnoreCase(
                        keyword);
    }
    
    public Product getProductDetails(Long productId) {

        return productRepository
                .findById(productId)
                .orElse(null);
    }
}
