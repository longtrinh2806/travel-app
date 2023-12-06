package com.backend.travelapp.service.implementation;

import com.backend.travelapp.exception.AuthenticateException;
import com.backend.travelapp.exception.TourNotFoundException;
import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.model.Role;
import com.backend.travelapp.model.Tour;
import com.backend.travelapp.model.User;
import com.backend.travelapp.repository.TourRepository;
import com.backend.travelapp.request.AddTourRequest;
import com.backend.travelapp.response.CreateTourResponse;
import com.backend.travelapp.response.GetTourResponse;
import com.backend.travelapp.service.TourService;
import com.backend.travelapp.service.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TourServiceImpl implements TourService {
    private final TourRepository tourRepository;
    private final UserService userService;

    public TourServiceImpl(TourRepository tourRepository, UserService userService) {
        this.tourRepository = tourRepository;
        this.userService = userService;
    }
    @Override
    public GetTourResponse getTourInfoByName(String name) {

        String modifiedName = modifiedString(name);
        Tour tour = tourRepository.findByTitle(modifiedName);

        if (tour == null)
            throw new TourNotFoundException("Can not find tour with name: " + name);

        return GetTourResponse
                .builder()
                .tourId(tour.getTourId())
                .rating(tour.getRating())
                .title(tour.getTitle())
                .description(tour.getDescription())
                .imageURL(tour.getImageURL())
                .price(tour.getPrice())
                .location(tour.getLocation())
                .duration(tour.getDuration())
                .departureDate(tour.getDepartureDate())
                .build();
    }


    @Override
    public List<GetTourResponse> getTourInfoByLocation(String location) {
//        String modifiedName = modifiedString(location);
        List<Tour> tourList = tourRepository.findByLocation(location);

        if (tourList.isEmpty())
            throw new TourNotFoundException("Tour is not existed!");
        List<GetTourResponse> responseList = tourList
                .stream()
                .map(tour -> mapToTourResponse(tour))
                .collect(Collectors.toList());

        return responseList;
    }

    private GetTourResponse mapToTourResponse(Tour tour) {
        GetTourResponse response = new GetTourResponse();
        response.setTourId(tour.getTourId());
        response.setRating(tour.getRating());
        response.setTitle(tour.getTitle());
        response.setDescription(tour.getDescription());
        response.setImageURL(tour.getImageURL());
        response.setPrice(tour.getPrice());
        response.setLocation(tour.getLocation());
        response.setDuration(tour.getDuration());
        response.setQuantity(tour.getQuantity());
        response.setDepartureDate(tour.getDepartureDate());
        return response;
    }

    @Override
    public List<GetTourResponse> getAllTour() {

        List<Tour> tourList = tourRepository.findAll();
        if (tourList.isEmpty())
            throw new TourNotFoundException("Have not had any tour yet!");

        List<GetTourResponse> responseList = new ArrayList<>();

        for (Tour tour : tourList) {
            var response = GetTourResponse
                    .builder()
                    .tourId(tour.getTourId())
                    .rating(tour.getRating())
                    .title(tour.getTitle())
                    .description(tour.getDescription())
                    .imageURL(tour.getImageURL())
                    .price(tour.getPrice())
                    .location(tour.getLocation())
                    .duration(tour.getDuration())
                    .departureDate(tour.getDepartureDate())
                    .quantity(tour.getQuantity())
                    .build();
            responseList.add(response);
        }
        return responseList;
    }

    @Override
    public CreateTourResponse createNewTour(String token, AddTourRequest request)
            throws UserNotFoundException, AuthenticateException, TourNotFoundException {

        User user = userService.findUserProfileByJwt(token);
        Tour tourExisted = tourRepository.findByTitle(modifiedString(request.getTitle()));

        if (user.getRole() != Role.Admin)
            throw new AuthenticateException("Permission denied. You do not have the required permission to create a new tour.");
        if (user == null)
            throw new UserNotFoundException("Invalid with token! Please login again");
        if (tourExisted != null)
            throw new TourNotFoundException("Tour with title: " + tourExisted.getTitle() + " is existed!");
        if (request.getTitle() == null || request.getTitle().isEmpty()) {
            throw new IllegalArgumentException("Tour Title is required.");
        }
        if (request.getLocation() == null || request.getLocation().isEmpty()) {
            throw new IllegalArgumentException("Tour Location is required.");
        }

        String title = modifiedString(request.getTitle());
        String location = modifiedString(request.getLocation());

        var tour = Tour.builder()
                .rating(0.0)
                .title(title)
                .description(request.getDescription())
                .imageURL(request.getImageURL())
                .price(request.getPrice())
                .location(location)
                .duration(request.getDuration())
                .departureDate(request.getDepartureDate())
                .quantity(request.getQuantity())
                .build();

        tourRepository.save(tour);

        return CreateTourResponse
                .builder()
                .message("Add New Tour Successfully!")
                .build();
    }

    @Override
    public CreateTourResponse updateTourById(String token, Long tourId, AddTourRequest request)
            throws UserNotFoundException, AuthenticateException, TourNotFoundException {

        User user = userService.findUserProfileByJwt(token);
        Tour tourExisted = tourRepository.findByTourId(tourId);

        if (user.getRole() != Role.Admin)
            throw new AuthenticateException("Permission denied. You do not have the required permission to update a new tour.");
        if (user == null)
            throw new UserNotFoundException("Invalid with token! Please login again");
        if (tourExisted == null)
            throw new TourNotFoundException("Tour with id: " + tourId + " is not existed!");
        if (request.getTitle() == null || request.getTitle().isEmpty()) {
            throw new IllegalArgumentException("Tour Title is required.");
        }
        if (request.getLocation() == null || request.getLocation().isEmpty()) {
            throw new IllegalArgumentException("Tour Location is required.");
        }

        String title = modifiedString(request.getTitle());
        String location = modifiedString(request.getLocation());

        tourExisted.setTitle(title);
        tourExisted.setDescription(request.getDescription());
        tourExisted.setImageURL(request.getImageURL());
        tourExisted.setPrice(request.getPrice());
        tourExisted.setLocation(location);
        tourExisted.setDuration(request.getDuration());
        tourExisted.setQuantity(request.getQuantity());
        tourExisted.setDepartureDate(request.getDepartureDate());

        tourRepository.save(tourExisted);

        return CreateTourResponse
                .builder()
                .message("Updated Tour Successfully")
                .build();
    }

    @Override
    public CreateTourResponse deleteTourById(String token, Long tourId)
            throws UserNotFoundException, AuthenticateException, TourNotFoundException {

        User user = userService.findUserProfileByJwt(token);
        Tour tourExisted = tourRepository.findByTourId(tourId);

        if (user.getRole() != Role.Admin)
            throw new AuthenticateException("Permission denied. You do not have the required permission to update a new tour.");
        if (user == null)
            throw new UserNotFoundException("Invalid with token! Please login again");
        if (tourExisted == null)
            throw new TourNotFoundException("Tour with id: " + tourId + " is not existed!");

        tourRepository.delete(tourExisted);
        return CreateTourResponse
                .builder()
                .message("Deleted Tour Successfully")
                .build();
    }


    private String modifiedString(String s) {
        s = s.toLowerCase().trim();
        s = s.replaceAll("\\s+", "-");
        return s;
    }
}
