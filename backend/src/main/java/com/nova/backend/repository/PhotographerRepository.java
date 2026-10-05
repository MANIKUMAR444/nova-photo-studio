package com.nova.backend.repository;

import com.nova.backend.entity.Photographer;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PhotographerRepository
        extends JpaRepository<Photographer, Long> {

    Optional<Photographer> findByEmail(String email);
}