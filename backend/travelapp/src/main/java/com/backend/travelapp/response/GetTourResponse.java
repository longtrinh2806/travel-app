package com.backend.travelapp.response;

import com.backend.travelapp.model.Review;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Setter
public class GetTourResponse {
    private Long tourId;
    private Double rating;
    private String title;
    private String description;
    private String imageURL;
    private Long price;
    private String location;
    private String duration;
    private Integer quantity;
    private LocalDate departureDate;
}
