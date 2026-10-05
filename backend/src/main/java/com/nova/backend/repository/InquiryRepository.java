package com.nova.backend.repository;

import com.nova.backend.entity.Inquiry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InquiryRepository
        extends JpaRepository<Inquiry, Long> {
}