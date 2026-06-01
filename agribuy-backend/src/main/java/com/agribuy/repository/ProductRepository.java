package com.agribuy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agribuy.entity.Product;

public interface ProductRepository
        extends JpaRepository<Product, Long> {

}