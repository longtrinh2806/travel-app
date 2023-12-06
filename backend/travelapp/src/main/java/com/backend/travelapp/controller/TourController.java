package com.backend.travelapp.controller;

import com.backend.travelapp.exception.TourNotFoundException;
import com.backend.travelapp.response.GetTourResponse;
import com.backend.travelapp.service.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tour")
public class TourController {
    private final TourService tourService;

    @Autowired
    public TourController(TourService tourService) {
        this.tourService = tourService;
    }

    @GetMapping
    public ResponseEntity<List<GetTourResponse>> getAllTour() {
        return ResponseEntity.ok(tourService.getAllTour());
    }

    @GetMapping("/{tourName}")
    public ResponseEntity<GetTourResponse> getTourInfoByName(@PathVariable("tourName") String tourName) throws TourNotFoundException {
        return ResponseEntity.ok(tourService.getTourInfoByName(tourName));
    }

    @GetMapping("/location/{location}")
    public ResponseEntity<List<GetTourResponse>> getTourInfoByLocation(@PathVariable("location") String location) throws TourNotFoundException {
        return ResponseEntity.ok(tourService.getTourInfoByLocation(location));
    }
}
