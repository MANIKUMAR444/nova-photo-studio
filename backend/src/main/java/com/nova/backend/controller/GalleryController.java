package com.nova.backend.controller;

import com.nova.backend.entity.Gallery;
import com.nova.backend.repository.GalleryRepository;

import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/galleries")
@CrossOrigin(origins = "http://localhost:5173")
public class GalleryController {

    private final GalleryRepository galleryRepository;

    public GalleryController(
            GalleryRepository galleryRepository) {

        this.galleryRepository = galleryRepository;
    }


    // CREATE GALLERY

    @PostMapping("/create")
    public ResponseEntity<?> createGallery(
            @RequestBody Gallery gallery) {

        String galleryId;

        do {

            galleryId =
                    "NOVA-" +
                    UUID.randomUUID()
                            .toString()
                            .substring(0, 8)
                            .toUpperCase();

        } while (
                galleryRepository
                        .findByGalleryId(galleryId)
                        .isPresent()
        );

        gallery.setGalleryId(galleryId);

        Gallery savedGallery =
                galleryRepository.save(gallery);

        return ResponseEntity.ok(savedGallery);
    }

    @GetMapping("/{galleryId}")
public ResponseEntity<?> getGalleryById(
        @PathVariable String galleryId) {

    return galleryRepository
            .findByGalleryId(galleryId)
            .map(ResponseEntity::ok)
            .orElse(
                ResponseEntity
                    .notFound()
                    .build()
            );
}


    // FIND GALLERIES BY CLIENT EMAIL

    @GetMapping("/client/{email}")
    public ResponseEntity<?> getClientGalleries(
            @PathVariable String email) {

        List<Gallery> galleries =
                galleryRepository
                        .findByClientEmail(email);

        return ResponseEntity.ok(galleries);
    }
}