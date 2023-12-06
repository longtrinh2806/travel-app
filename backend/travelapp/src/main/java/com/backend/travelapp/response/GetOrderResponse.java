package com.backend.travelapp.response;

import com.backend.travelapp.model.OrderStatus;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class GetOrderResponse {
    private Long orderId;
    private Long totalPrice;
    private String notes;
    private OrderStatus status;

}
