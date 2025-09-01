package com.coaching.repository;

import com.coaching.model.Coach;
import com.coaching.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface CustomerRepository extends JpaRepository<Customer, Long> {
}