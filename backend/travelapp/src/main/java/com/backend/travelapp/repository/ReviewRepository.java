package com.backend.travelapp.repository;

import com.backend.travelapp.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    @Query("SELECT r from Review r where r.tour.tourId = :tourId")
    List<Review> findByTourId(@Param("tourId") Long tourId);
}
