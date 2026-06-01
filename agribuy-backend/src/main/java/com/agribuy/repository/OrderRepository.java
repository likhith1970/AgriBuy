package com.agribuy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agribuy.entity.Order;

public interface OrderRepository
        extends JpaRepository<Order, Long> {

}
