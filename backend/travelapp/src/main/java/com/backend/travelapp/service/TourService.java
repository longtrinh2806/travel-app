package com.backend.travelapp.service;

import com.backend.travelapp.exception.AuthenticateException;
import com.backend.travelapp.exception.TourNotFoundException;
import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.request.AddTourRequest;
import com.backend.travelapp.response.CreateTourResponse;
import com.backend.travelapp.response.GetTourResponse;

import java.util.List;

public interface TourService {
    GetTourResponse getTourInfoByName(String name) throws TourNotFoundException;
    CreateTourResponse createNewTour(String token, AddTourRequest request)
            throws UserNotFoundException, AuthenticateException, TourNotFoundException;

    CreateTourResponse updateTourById(String token, Long tourId, AddTourRequest request)
            throws UserNotFoundException, AuthenticateException, TourNotFoundException;

    CreateTourResponse deleteTourById(String token, Long tourId)
            throws UserNotFoundException, AuthenticateException, TourNotFoundException;

    List<GetTourResponse> getAllTour();

    List<GetTourResponse> getTourInfoByLocation(String location);
}
