package com.backend.travelapp.service;

import com.backend.travelapp.exception.AuthenticateException;
import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.model.User;
import com.backend.travelapp.response.GetUserResponse;

import java.util.List;

public interface UserService {
    User findUserProfileByJwt(String token) throws UserNotFoundException;

    List<GetUserResponse> getAllUsers(String token) throws UserNotFoundException, AuthenticateException;
}
