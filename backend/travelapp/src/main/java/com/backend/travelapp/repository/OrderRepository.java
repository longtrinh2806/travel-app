package com.backend.travelapp.repository;

import com.backend.travelapp.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    Order findByOrderId(Long orderId);
}
