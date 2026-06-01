package com.agribuy.controller;

import org.springframework.web.bind.annotation.*;

import com.agribuy.dto.ProductRequest;
import com.agribuy.service.ProductService;
import java.util.List;
import com.agribuy.entity.Product;
import com.agribuy.dto.FarmerDashboardResponse;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(
            ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public String addProduct(
            @RequestBody ProductRequest request) {

        return productService.addProduct(request);
    }
    
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }
    
    @GetMapping("/{id}")
    public Product getProductById(
            @PathVariable Long id) {

        return productService.getProductById(id);

    }
    
    @PutMapping("/{id}")
    public String updateProduct(
            @PathVariable Long id,
            @RequestBody ProductRequest request) {

        return productService.updateProduct(
                id,
                request);

    }
    
    @DeleteMapping("/{id}")
    public String deleteProduct(
            @PathVariable Long id) {

        return productService.deleteProduct(id);

    }
    
    @GetMapping("/dashboard/{farmerId}")
    public FarmerDashboardResponse getDashboard(
            @PathVariable Long farmerId) {

        return productService.getDashboard(farmerId);
    }
}