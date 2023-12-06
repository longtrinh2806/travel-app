package com.backend.travelapp.service.implementation;

import com.backend.travelapp.exception.ReviewNotFoundException;
import com.backend.travelapp.request.CreateReviewRequest;
import com.backend.travelapp.exception.TourNotFoundException;
import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.model.Review;
import com.backend.travelapp.model.Tour;
import com.backend.travelapp.model.User;
import com.backend.travelapp.repository.ReviewRepository;
import com.backend.travelapp.repository.TourRepository;
import com.backend.travelapp.response.CreateReviewResponse;
import com.backend.travelapp.response.GetReviewResponse;
import com.backend.travelapp.service.ReviewService;
import com.backend.travelapp.service.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final UserService userService;
    private final TourRepository tourRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository, UserService userService, TourRepository tourRepository) {
        this.reviewRepository = reviewRepository;
        this.userService = userService;
        this.tourRepository = tourRepository;
    }

    @Override
    public CreateReviewResponse createNewReview(String token, CreateReviewRequest request)
            throws UserNotFoundException, TourNotFoundException {

        User user = userService.findUserProfileByJwt(token);
        if (user == null)
            throw new UserNotFoundException("Invalid user or token");

        Tour tour = tourRepository.findByTourId(request.getTourId());
        if (tour == null)
            throw new TourNotFoundException("Tour with id: " + request.getTourId() + " is not existed!");

        var review = Review
                .builder()
                .rating(request.getRating())
                .review(request.getReview())
                .tour(tour)
                .user(user)
                .build();
        reviewRepository.save(review);

        tour.setRating(getRating(tour.getTourId()));
        tourRepository.save(tour);

        return CreateReviewResponse
                .builder()
                .message("Created Successfully")
                .build();
    }

    @Override
    public List<GetReviewResponse> getTouReviewsByTourId(Long tourId) {
        List<Review> reviewList = reviewRepository.findByTourId(tourId);
        if (reviewList.isEmpty())
            throw new ReviewNotFoundException("Have not had any reviews yet!");

        List<GetReviewResponse> responseList = new ArrayList<>();
        for (Review r : reviewList) {
            var response = GetReviewResponse
                    .builder()
                    .userFullName(r.getUser().getFirstName() + " " + r.getUser().getLastName())
                    .rating(r.getRating())
                    .review(r.getReview())
                    .build();
            responseList.add(response);
        }
        return responseList;
    }

    private Double getRating(Long tourId) {
        List<Review> reviews = reviewRepository.findByTourId(tourId);
        double tmp = 0.0;
        double count = 0.0;
        for (Review r : reviews) {
            tmp += r.getRating();
            count++;
        }
        return tmp / count;
    }

    private String modifiedString(String s) {
        s = s.toLowerCase().trim();
        s = s.replaceAll("\\s+", "-");
        return s;
    }
}
