package com.backend.travelapp.response;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class SignInResponse {
    private String token;
    private String message;
}
