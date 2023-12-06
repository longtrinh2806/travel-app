package com.backend.travelapp.controller;

import com.backend.travelapp.exception.AuthenticateException;
import com.backend.travelapp.exception.TourNotFoundException;
import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.request.AddTourRequest;
import com.backend.travelapp.response.CreateTourResponse;
import com.backend.travelapp.service.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/tour")
public class AdminTourController {
    private final TourService tourService;

    @Autowired
    public AdminTourController(TourService tourService) {
        this.tourService = tourService;
    }

    @PostMapping("/create")
    public ResponseEntity<CreateTourResponse> createTour(
            @RequestHeader("Authorization") String token,
            @RequestBody AddTourRequest request) throws UserNotFoundException, AuthenticateException, TourNotFoundException {
        return ResponseEntity.ok(tourService.createNewTour(token, request));
    }

    @PutMapping("/update/{tourId}")
    public ResponseEntity<CreateTourResponse> updateTour(
            @RequestHeader("Authorization") String token,
            @PathVariable Long tourId,
            @RequestBody AddTourRequest request) throws UserNotFoundException, TourNotFoundException, AuthenticateException {
        return ResponseEntity.ok(tourService.updateTourById(token, tourId, request));
    }

    @DeleteMapping("/delete/{tourId}")
    public ResponseEntity<CreateTourResponse> deleteTour(
            @RequestHeader("Authorization") String token,
            @PathVariable Long tourId) throws UserNotFoundException, TourNotFoundException, AuthenticateException {
        return ResponseEntity.ok(tourService.deleteTourById(token, tourId));
    }

}
