package com.backend.travelapp.service.implementation;

import com.backend.travelapp.exception.AuthenticateException;
import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.model.Role;
import com.backend.travelapp.model.User;
import com.backend.travelapp.repository.UserRepository;
import com.backend.travelapp.response.GetUserResponse;
import com.backend.travelapp.secutiry.JwtService;
import com.backend.travelapp.service.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final JwtService jwtService;

    public UserServiceImpl(UserRepository userRepository, JwtService jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }

    @Override
    public User findUserProfileByJwt(String token) throws UserNotFoundException {
        String email = jwtService.extractEmail(token);
        User user = userRepository.findByEmail(email);
        if (user == null)
            throw new UserNotFoundException("User with email: " + email + " not exist!");
        return user;
    }

    @Override
    public List<GetUserResponse> getAllUsers(String token) throws UserNotFoundException, AuthenticateException {

        User user = findUserProfileByJwt(token);

        if (user.getRole() != Role.Admin)
            throw new AuthenticateException("Permission denied. You do not have the required permission to create a new tour.");
        if (user == null)
            throw new UserNotFoundException("Invalid with token! Please login again");

        List<User> userList = userRepository.findAll();
        if (userList == null) {
            throw new UserNotFoundException("Have not had any user yet!");
        }

        List<GetUserResponse> userResponseList = new ArrayList<>();

        for (User tmp : userList) {
            var u = GetUserResponse
                    .builder()
                    .userId(tmp.getUserId())
                    .email(tmp.getEmail())
                    .firstName(tmp.getFirstName())
                    .lastName(tmp.getLastName())
                    .build();
            userResponseList.add(u);
        }
        return userResponseList;
    }
}
