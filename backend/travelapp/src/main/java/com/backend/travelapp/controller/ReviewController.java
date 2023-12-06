package com.backend.travelapp.controller;

import com.backend.travelapp.exception.TourNotFoundException;
import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.request.CreateReviewRequest;
import com.backend.travelapp.response.CreateReviewResponse;
import com.backend.travelapp.response.GetReviewResponse;
import com.backend.travelapp.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/review")
public class ReviewController {
    private final ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping
    public ResponseEntity<CreateReviewResponse> createReview(
            @RequestHeader("Authorization") String token,
            @RequestBody CreateReviewRequest request) throws UserNotFoundException, TourNotFoundException {
        return ResponseEntity.ok(reviewService.createNewReview(token, request));
    }
    @GetMapping("/tour/{tourId}")
    public ResponseEntity<List<GetReviewResponse>> getTourReviews(@PathVariable Long tourId) {
        return ResponseEntity.ok(reviewService.getTouReviewsByTourId(tourId));
    }
}
