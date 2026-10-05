package com.nova.backend.repository;

import com.nova.backend.entity.Gallery;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GalleryRepository
        extends JpaRepository<Gallery, Long> {

    Optional<Gallery> findByGalleryId(String galleryId);

    List<Gallery> findByClientEmail(String clientEmail);
}