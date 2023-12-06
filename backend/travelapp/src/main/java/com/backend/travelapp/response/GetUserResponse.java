package com.backend.travelapp.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class GetUserResponse {
    private Long userId;
    private String email;
    private String firstName;
    private String lastName;
}
