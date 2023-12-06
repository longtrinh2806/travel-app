package com.backend.travelapp.service;

import com.backend.travelapp.request.SignInRequest;
import com.backend.travelapp.request.SignUpRequest;
import com.backend.travelapp.response.SignInResponse;
import com.backend.travelapp.response.SignUpResponse;

public interface AuthenticationService {
    SignUpResponse signUp(SignUpRequest request);

    SignInResponse signIn(SignInRequest request);
}
