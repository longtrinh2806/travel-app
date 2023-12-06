package com.backend.travelapp.service;

import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.request.CreateOrderRequest;
import com.backend.travelapp.response.ChangeStatusResponse;
import com.backend.travelapp.response.CreateOrderResponse;
import com.backend.travelapp.response.GetOrderResponse;

import java.util.List;

public interface OrderService {
    CreateOrderResponse createNewOrder(String token, CreateOrderRequest request) throws UserNotFoundException;

    List<GetOrderResponse> getAllOrder(String token) throws UserNotFoundException;

    ChangeStatusResponse confirmedOrder(String token, Long orderId) throws UserNotFoundException;

    ChangeStatusResponse canceledOrder(String token, Long orderId) throws UserNotFoundException;
}
