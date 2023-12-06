package com.backend.travelapp.controller;

import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.response.ChangeStatusResponse;
import com.backend.travelapp.response.GetOrderResponse;
import com.backend.travelapp.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/order")
public class AdminOrderController {
    private final OrderService orderService;

    @Autowired
    public AdminOrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public ResponseEntity<List<GetOrderResponse>> getAllOrder(@RequestHeader("Authorization") String token) throws UserNotFoundException {
        return ResponseEntity.ok(orderService.getAllOrder(token));
    }
    @PutMapping("/confirm/{orderId}")
    public ResponseEntity<ChangeStatusResponse> confirmedOrder(
            @RequestHeader("Authorization") String token,
            @PathVariable Long orderId) throws UserNotFoundException {
        return ResponseEntity.ok(orderService.confirmedOrder(token, orderId));
    }
    @PutMapping("/cancel/{orderId}")
    public ResponseEntity<ChangeStatusResponse> canceledOrder(
            @RequestHeader("Authorization") String token,
            @PathVariable Long orderId) throws UserNotFoundException {
        return ResponseEntity.ok(orderService.canceledOrder(token, orderId));
    }
}
