package com.backend.travelapp.repository;

import com.backend.travelapp.model.BillingDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BillingDetailRepository extends JpaRepository<BillingDetail, Long> {
}
