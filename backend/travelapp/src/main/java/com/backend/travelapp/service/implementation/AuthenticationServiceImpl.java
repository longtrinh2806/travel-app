package com.backend.travelapp.service.implementation;

import com.backend.travelapp.model.Role;
import com.backend.travelapp.model.User;
import com.backend.travelapp.repository.UserRepository;
import com.backend.travelapp.request.SignInRequest;
import com.backend.travelapp.request.SignUpRequest;
import com.backend.travelapp.response.SignInResponse;
import com.backend.travelapp.response.SignUpResponse;
import com.backend.travelapp.secutiry.JwtService;
import com.backend.travelapp.service.AuthenticationService;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
   private final UserRepository userRepository;
   private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthenticationServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    @Override
    public SignUpResponse signUp(SignUpRequest request) {
        User user = userRepository.findByEmail(request.getEmail());

        if (user == null) {
            var tmp = User.builder()
                    .userId(0L)
                    .firstName(request.getFirstName())
                    .lastName(request.getLastName())
                    .birthDate(request.getBirthDate())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .phone(request.getPhone())
                    .country(request.getCountry())
                    .role(Role.User)
                    .build();
            userRepository.save(tmp);
            return SignUpResponse
                    .builder()
                    .message("Sign Up Successfully")
                    .build();
        }
        else throw new IllegalArgumentException("Email is existed");
    }

    @Override
    public SignInResponse signIn(SignInRequest request) {
        Authentication authentication = authenticate(request.getEmail(), request.getPassword());

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtService.generateToken(authentication);

        return SignInResponse
                .builder()
                .token(token)
                .message("Sign In Successfully")
                .build();
    }

    private Authentication authenticate(String email, String password) {
        User userDetails = userRepository.findByEmail(email);
        if (userDetails == null)
            throw new BadCredentialsException("Wrong Email!!!");
        if (!passwordEncoder.matches(password, userDetails.getPassword()))
            throw new BadCredentialsException("Wrong Password!!!");
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
