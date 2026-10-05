package com.nova.backend.controller;

import com.nova.backend.entity.Photographer;
import com.nova.backend.repository.PhotographerRepository;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/photographers")
@CrossOrigin(origins = "http://localhost:5173")
public class PhotographerController {

    private final PhotographerRepository photographerRepository;

    public PhotographerController(
            PhotographerRepository photographerRepository) {

        this.photographerRepository = photographerRepository;
    }

    // REGISTER PHOTOGRAPHER

    @PostMapping("/register")
    public ResponseEntity<?> registerPhotographer(
            @RequestBody Photographer photographer) {

        Optional<Photographer> existingPhotographer =
                photographerRepository
                        .findByEmail(photographer.getEmail());

        if (existingPhotographer.isPresent()) {

            return ResponseEntity
                    .badRequest()
                    .body("Email already registered.");
        }

        Photographer savedPhotographer =
                photographerRepository.save(photographer);

        return ResponseEntity.ok(savedPhotographer);
    }


    // LOGIN PHOTOGRAPHER

    @PostMapping("/login")
    public ResponseEntity<?> loginPhotographer(
            @RequestBody Photographer loginData) {

        Optional<Photographer> photographer =
                photographerRepository
                        .findByEmail(loginData.getEmail());

        if (photographer.isEmpty()) {

            return ResponseEntity
                    .badRequest()
                    .body("Invalid email or password.");
        }

        Photographer foundPhotographer =
                photographer.get();

        if (!foundPhotographer
                .getPassword()
                .equals(loginData.getPassword())) {

            return ResponseEntity
                    .badRequest()
                    .body("Invalid email or password.");
        }

        return ResponseEntity.ok(foundPhotographer);
    }
}