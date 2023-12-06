package com.backend.travelapp.controller;

import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.request.CreateOrderRequest;
import com.backend.travelapp.request.CreateReviewRequest;
import com.backend.travelapp.response.CreateOrderResponse;
import com.backend.travelapp.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
public class OrderController {
    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public ResponseEntity<CreateOrderResponse> createOrder(
            @RequestHeader("Authorization") String token,
            @RequestBody CreateOrderRequest request) throws UserNotFoundException {
        return ResponseEntity.ok(orderService.createNewOrder(token, request));
    }

}
