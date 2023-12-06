package com.backend.travelapp.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class GetReviewResponse {
    private String userFullName;
    private Double rating;
    private String review;

}
