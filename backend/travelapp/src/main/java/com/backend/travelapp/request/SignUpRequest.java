package com.backend.travelapp.request;

import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Getter
public class SignUpRequest {
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private LocalDate birthDate;
    private String phone;
    private String country;
}
