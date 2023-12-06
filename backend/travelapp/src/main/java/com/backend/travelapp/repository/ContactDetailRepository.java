package com.backend.travelapp.repository;

import com.backend.travelapp.model.ContactDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactDetailRepository extends JpaRepository<ContactDetail, Long> {
}
