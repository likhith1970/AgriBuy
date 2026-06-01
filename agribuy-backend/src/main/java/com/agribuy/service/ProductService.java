package com.agribuy.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.agribuy.dto.ProductRequest;
import com.agribuy.entity.Product;
import com.agribuy.repository.ProductRepository;
import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public String addProduct(ProductRequest request) {

        Product product = new Product();

        product.setProductName(request.getProductName());
        product.setCategory(request.getCategory());
        product.setQuantity(request.getQuantity());
        product.setPrice(request.getPrice());
        product.setUnit(request.getUnit());
        product.setDescription(request.getDescription());
        product.setImageUrl(request.getImageUrl());
        product.setFarmerId(request.getFarmerId());
        product.setCreatedDate(LocalDateTime.now());

        productRepository.save(product);

        return "Product Added Successfully";
    }
    
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
    
    public Product getProductById(Long productId) {

        return productRepository.findById(productId)
                .orElse(null);

    }
    
    public String updateProduct(
            Long productId,
            ProductRequest request) {

        Product product = productRepository
                .findById(productId)
                .orElse(null);

        if (product == null) {
            return "Product Not Found";
        }

        product.setProductName(request.getProductName());
        product.setCategory(request.getCategory());
        product.setQuantity(request.getQuantity());
        product.setPrice(request.getPrice());
        product.setUnit(request.getUnit());
        product.setDescription(request.getDescription());
        product.setImageUrl(request.getImageUrl());

        productRepository.save(product);

        return "Product Updated Successfully";
    }
    
    public String deleteProduct(Long productId) {

        productRepository.deleteById(productId);

        return "Product Deleted Successfully";
    }
}
