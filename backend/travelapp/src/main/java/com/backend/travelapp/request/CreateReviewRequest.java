package com.backend.travelapp.request;

import lombok.Getter;

@Getter
public class CreateReviewRequest {
    private Long tourId;
    private Double rating;
    private String review;
}
