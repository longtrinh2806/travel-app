package com.backend.travelapp.repository;

import com.backend.travelapp.model.TravellerDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TravellerDetailRepository extends JpaRepository<TravellerDetails, Long> {
}
