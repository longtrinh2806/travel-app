package com.backend.travelapp.request;

import com.backend.travelapp.model.BillingDetail;
import com.backend.travelapp.model.ContactDetail;
import com.backend.travelapp.model.TravellerDetails;
import lombok.Getter;

import java.util.List;

@Getter
public class CreateOrderRequest {
    private Integer numberOfRooms;
    private Integer numberOfPeople;
    private List<TravellerDetails> travellerDetails;
    private ContactDetail contactDetail;
    private BillingDetail billingDetail;
    private String notes;
    private Long tourId;
}
