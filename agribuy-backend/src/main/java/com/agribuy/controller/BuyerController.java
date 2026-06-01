package com.agribuy.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.agribuy.entity.Product;
import com.agribuy.service.BuyerService;

@RestController
@RequestMapping("/api/buyer/products")
public class BuyerController {

    private final BuyerService buyerService;

    public BuyerController(BuyerService buyerService) {
        this.buyerService = buyerService;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return buyerService.getAllProducts();
    }

    @GetMapping("/category/{category}")
    public List<Product> getProductsByCategory(
            @PathVariable String category) {

        return buyerService
                .getProductsByCategory(category);
    }

    @GetMapping("/search/{keyword}")
    public List<Product> searchProducts(
            @PathVariable String keyword) {

        return buyerService
                .searchProducts(keyword);
    }
    
    @GetMapping("/{id}")
    public Product getProductDetails(
            @PathVariable Long id) {

        return buyerService
                .getProductDetails(id);
    }
}
