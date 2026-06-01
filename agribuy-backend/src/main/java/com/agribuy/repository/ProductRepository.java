package com.agribuy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agribuy.entity.Product;

import java.util.List;

public interface ProductRepository
extends JpaRepository<Product, Long> {

List<Product> findByFarmerId(Long farmerId);

}

