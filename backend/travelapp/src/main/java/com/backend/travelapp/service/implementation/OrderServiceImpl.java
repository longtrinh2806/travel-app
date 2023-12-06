package com.backend.travelapp.service.implementation;

import com.backend.travelapp.exception.OrderNotFoundException;
import com.backend.travelapp.exception.TourNotFoundException;
import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.model.*;
import com.backend.travelapp.repository.*;
import com.backend.travelapp.request.CreateOrderRequest;
import com.backend.travelapp.response.ChangeStatusResponse;
import com.backend.travelapp.response.CreateOrderResponse;
import com.backend.travelapp.response.GetOrderResponse;
import com.backend.travelapp.service.OrderService;
import com.backend.travelapp.service.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@Service
public class OrderServiceImpl implements OrderService {
    private final UserService userService;
    private final TourRepository tourRepository;
    private final OrderRepository orderRepository;
    private final ContactDetailRepository contactDetailRepository;
    private final BillingDetailRepository billingDetailRepository;
    private final TravellerDetailRepository travellerDetailRepository;

    public OrderServiceImpl(UserService userService, TourRepository tourRepository, OrderRepository orderRepository, ContactDetailRepository contactDetailRepository, BillingDetailRepository billingDetailRepository, TravellerDetailRepository travellerDetailRepository) {
        this.userService = userService;
        this.tourRepository = tourRepository;
        this.orderRepository = orderRepository;
        this.contactDetailRepository = contactDetailRepository;
        this.billingDetailRepository = billingDetailRepository;
        this.travellerDetailRepository = travellerDetailRepository;
    }

    @Override
    public CreateOrderResponse createNewOrder(String token, CreateOrderRequest request)
            throws UserNotFoundException {

        User user = userService.findUserProfileByJwt(token);
        if (user == null)
            throw new UserNotFoundException("Invalid user. Please login again!");

        Tour tour = tourRepository.findByTourId(request.getTourId());
        if (tour == null)
            throw new TourNotFoundException("Tour with id: " + request.getTourId() + " is not existed!");

        if (tour.getQuantity() == 0)
            throw new TourNotFoundException("Sorry, this tour is now full.");

        ContactDetail savedContactDetail = contactDetailRepository.save(request.getContactDetail());
        BillingDetail savedBillingDetail = billingDetailRepository.save(request.getBillingDetail());

        var order = Order
                .builder()
                .numberOfRooms(request.getNumberOfRooms())
                .numberOfPeople(request.getNumberOfPeople())
                .status(OrderStatus.PENDING)
                .travellerDetails(request.getTravellerDetails())
                .contactDetail(savedContactDetail)
                .billingDetail(savedBillingDetail)
                .notes(request.getNotes())
                .totalPrice(calculateTotalPrice(tour, request.getNumberOfRooms(), request.getNumberOfPeople()))
                .tour(tour)
                .user(user)
                .build();
        orderRepository.save(order);

        List<TravellerDetails> travellerDetailsCopy = new ArrayList<>(request.getTravellerDetails());
        for (TravellerDetails t : travellerDetailsCopy) {
            t.setOrder(order);
            travellerDetailRepository.save(t);
        }

        tour.setQuantity(tour.getQuantity() - 1);
        tourRepository.save(tour);

        return CreateOrderResponse
                .builder()
                .message("Create order successfully")
                .build();
    }

    @Override
    public List<GetOrderResponse> getAllOrder(String token) throws UserNotFoundException {
        User user = userService.findUserProfileByJwt(token);
        if (user == null)
            throw new UserNotFoundException("Invalid user. Please login again!");
        List<Order> orderList = orderRepository.findAll();

        List<GetOrderResponse> orderResponseList = orderList.stream()
                .map(order -> mapToOrderResponse(order)).collect(Collectors.toList());
        return orderResponseList;
    }

    @Override
    public ChangeStatusResponse confirmedOrder(String token, Long orderId) throws UserNotFoundException {
        User user = userService.findUserProfileByJwt(token);
        if (user == null)
            throw new UserNotFoundException("Invalid user. Please login again!");
        Order order = orderRepository.findByOrderId(orderId);
        if (order == null)
            throw new OrderNotFoundException("Order not existed!");
        order.setStatus(OrderStatus.CONFIRMED);
        orderRepository.save(order);
        return ChangeStatusResponse
                .builder()
                .message("Confirmed Successfully")
                .build();
    }

    @Override
    public ChangeStatusResponse canceledOrder(String token, Long orderId) throws UserNotFoundException {
        User user = userService.findUserProfileByJwt(token);
        if (user == null)
            throw new UserNotFoundException("Invalid user. Please login again!");
        Order order = orderRepository.findByOrderId(orderId);
        if (order == null)
            throw new OrderNotFoundException("Order not existed!");
        order.setStatus(OrderStatus.CANCELLED);
        orderRepository.save(order);
        return ChangeStatusResponse
                .builder()
                .message("Cancelled Successfully")
                .build();
    }

    private GetOrderResponse mapToOrderResponse(Order order) {
        return GetOrderResponse
                .builder()
                .orderId(order.getOrderId())
                .notes(order.getNotes())
                .totalPrice(order.getTotalPrice())
                .status(order.getStatus())
                .build();
    }

    private Long calculateTotalPrice(Tour tour, Integer numberOfRooms, Integer numberOfPeople) {

        // tour price = gia goc cua tour * so nguoi
        Long tourPrice = tour.getPrice() * numberOfPeople;

        Long roomPrice = 0L;
        // room price = so phong * 100$ (cu 1 phong them 100$)
        if (numberOfRooms > 1)
            roomPrice = (long) ((numberOfRooms - 1) * 100);

        return tourPrice + roomPrice;
    }
}
