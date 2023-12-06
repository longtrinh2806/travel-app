package com.backend.travelapp.repository;

import com.backend.travelapp.model.Tour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TourRepository extends JpaRepository<Tour, Long> {
    @Query("select t from Tour t where t.title = :title")
    Tour findByTitle(@Param("title") String title);
    Tour findByTourId(Long tourId);
    List<Tour> findByLocation(String location);
}
