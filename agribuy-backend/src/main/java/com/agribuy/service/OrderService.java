package com.agribuy.service;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.agribuy.dto.PlaceOrderRequest;
import com.agribuy.entity.Order;
import com.agribuy.entity.OrderStatus;
import com.agribuy.repository.OrderRepository;

import java.util.List;
import com.agribuy.dto.UpdateOrderStatusRequest;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(
            OrderRepository orderRepository) {

        this.orderRepository = orderRepository;
    }

    public String placeOrder(
            PlaceOrderRequest request) {

        Order order = new Order();

        order.setProductId(request.getProductId());
        order.setBuyerId(request.getBuyerId());
        order.setFarmerId(request.getFarmerId());
        order.setQuantity(request.getQuantity());
        order.setTotalPrice(request.getTotalPrice());

        order.setStatus(OrderStatus.PLACED);
        order.setOrderDate(LocalDateTime.now());

        orderRepository.save(order);

        return "Order Placed Successfully";
    }
    
    public List<Order> getAllOrders() {

        return orderRepository.findAll();

    }
    
    public Order getOrderById(Long orderId) {

        return orderRepository
                .findById(orderId)
                .orElse(null);

    }
    
    public String updateOrderStatus(
            Long orderId,
            UpdateOrderStatusRequest request) {

        Order order = orderRepository
                .findById(orderId)
                .orElse(null);

        if (order == null) {
            return "Order Not Found";
        }

        order.setStatus(
                OrderStatus.valueOf(
                        request.getStatus()));

        orderRepository.save(order);

        return "Order Status Updated";
    }
}
