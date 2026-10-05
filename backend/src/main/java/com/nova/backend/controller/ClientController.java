package com.nova.backend.controller;

import com.nova.backend.entity.Client;
import com.nova.backend.repository.ClientRepository;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/clients")
@CrossOrigin(origins = "http://localhost:5173")
public class ClientController {

    private final ClientRepository clientRepository;

    public ClientController(
            ClientRepository clientRepository) {

        this.clientRepository = clientRepository;
    }


    // REGISTER CLIENT

    @PostMapping("/register")
    public ResponseEntity<?> registerClient(
            @RequestBody Client client) {

        Optional<Client> existingClient =
                clientRepository
                        .findByEmail(client.getEmail());

        if (existingClient.isPresent()) {

            return ResponseEntity
                    .badRequest()
                    .body("Email already registered.");
        }

        Client savedClient =
                clientRepository.save(client);

        return ResponseEntity.ok(savedClient);
    }


    // LOGIN CLIENT

    @PostMapping("/login")
    public ResponseEntity<?> loginClient(
            @RequestBody Client loginData) {

        Optional<Client> client =
                clientRepository
                        .findByEmail(loginData.getEmail());

        if (client.isEmpty()) {

            return ResponseEntity
                    .badRequest()
                    .body("Invalid email or password.");
        }

        Client foundClient =
                client.get();

        if (!foundClient
                .getPassword()
                .equals(loginData.getPassword())) {

            return ResponseEntity
                    .badRequest()
                    .body("Invalid email or password.");
        }

        return ResponseEntity.ok(foundClient);
    }
}