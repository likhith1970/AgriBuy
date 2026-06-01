package com.agribuy.controller;

import org.springframework.web.bind.annotation.*;

import com.agribuy.dto.PlaceOrderRequest;
import com.agribuy.service.OrderService;

import java.util.List;
import com.agribuy.entity.Order;
import com.agribuy.dto.UpdateOrderStatusRequest;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(
            OrderService orderService) {

        this.orderService = orderService;
    }

    @PostMapping
    public String placeOrder(
            @RequestBody PlaceOrderRequest request) {

        return orderService.placeOrder(request);
    }

    @GetMapping
    public List<Order> getAllOrders() {

        return orderService.getAllOrders();
    }

    @GetMapping("/{id}")
    public Order getOrderById(
            @PathVariable Long id) {

        return orderService.getOrderById(id);
    }

    @PutMapping("/{id}/status")
    public String updateOrderStatus(
            @PathVariable Long id,
            @RequestBody UpdateOrderStatusRequest request) {

        return orderService.updateOrderStatus(
                id,
                request);
    }
}

