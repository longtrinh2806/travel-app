package com.backend.travelapp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "traveller_details")
public class TravellerDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "traveller_id")
    private Long travellerId;

    @Column(name = "danh_xung")
    private String danhXung; // Mr, Mrs, Ms, Miss, Master

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "passport_number", unique = true)
    private String passportNumber;

    @Column(name = "age")
    private int age;

    @Column(name = "phone")
    private String phone;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    private Order order;
}
