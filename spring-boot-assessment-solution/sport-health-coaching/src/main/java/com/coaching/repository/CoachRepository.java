package com.coaching.repository;

import com.coaching.model.Coach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface CoachRepository extends JpaRepository<Coach, Long> {
}