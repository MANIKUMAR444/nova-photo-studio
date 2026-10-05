package com.nova.backend.controller;

import com.nova.backend.entity.Inquiry;
import com.nova.backend.repository.InquiryRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/inquiries")
@CrossOrigin(origins = "http://localhost:5173")
public class InquiryController {

    private final InquiryRepository inquiryRepository;

    public InquiryController(InquiryRepository inquiryRepository) {
        this.inquiryRepository = inquiryRepository;
    }

    @PostMapping
    public ResponseEntity<Inquiry> createInquiry(
            @RequestBody Inquiry inquiry) {

        Inquiry savedInquiry = inquiryRepository.save(inquiry);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedInquiry);
    }
}