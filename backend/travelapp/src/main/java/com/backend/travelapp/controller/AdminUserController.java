package com.backend.travelapp.controller;

import com.backend.travelapp.exception.AuthenticateException;
import com.backend.travelapp.exception.UserNotFoundException;
import com.backend.travelapp.response.GetUserResponse;
import com.backend.travelapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin/user")
public class AdminUserController {
    private final UserService userService;

    @Autowired
    public AdminUserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<GetUserResponse>> getAllUser(@RequestHeader("Authorization") String token)
            throws UserNotFoundException, AuthenticateException {
        return ResponseEntity.ok(userService.getAllUsers(token));
    }
}
