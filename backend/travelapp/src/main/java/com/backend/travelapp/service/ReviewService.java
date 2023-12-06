package com.backend.travelapp.service;

import com.backend.travelapp.request.CreateReviewRequest;
import com.backend.travelapp.exception.TourNotFoundException;
import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.response.CreateReviewResponse;
import com.backend.travelapp.response.GetReviewResponse;

import java.util.List;

public interface ReviewService {
    CreateReviewResponse createNewReview(String token, CreateReviewRequest request) throws UserNotFoundException, TourNotFoundException;

    List<GetReviewResponse> getTouReviewsByTourId(Long tourId);
}
