package com.backend.travelapp.request;

import lombok.Getter;

import java.time.LocalDate;

@Getter
public class AddTourRequest {
    private String title;
    private String description;
    private String imageURL;
    private Long price;
    private String location;
    private String duration;
    private int quantity;
    private LocalDate departureDate;
}
