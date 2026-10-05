package com.nova.backend.controller;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.nova.backend.entity.Photo;
import com.nova.backend.repository.PhotoRepository;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/photos")
@CrossOrigin(origins = "http://localhost:5173")
public class PhotoController {

    private final PhotoRepository photoRepository;
    private final Cloudinary cloudinary;

    public PhotoController(
            PhotoRepository photoRepository,
            Cloudinary cloudinary) {

        this.photoRepository = photoRepository;
        this.cloudinary = cloudinary;
    }


    @PostMapping("/upload")
    public ResponseEntity<?> uploadPhotos(

            @RequestParam("galleryId")
            String galleryId,

            @RequestParam("photos")
            MultipartFile[] photos) {

        try {

            List<Photo> savedPhotos =
                    new ArrayList<>();


            for (MultipartFile file : photos) {

                /*
                 * Upload image to Cloudinary
                 */

                Map<?, ?> uploadResult =
                        cloudinary.uploader().upload(
                                file.getBytes(),
                                ObjectUtils.asMap(
                                        "resource_type",
                                        "image"
                                )
                        );


                /*
                 * Get Cloudinary image URL
                 */

                String imageUrl =
                        uploadResult
                                .get("secure_url")
                                .toString();


                /*
                 * Create Photo object
                 */

                Photo photo =
                        new Photo();


                photo.setFileName(
                        file.getOriginalFilename()
                );


                /*
                 * Store Cloudinary URL
                 * instead of local file path
                 */

                photo.setFilePath(
                        imageUrl
                );


                photo.setGalleryId(
                        galleryId
                );


                /*
                 * Save information in MySQL
                 */

                Photo savedPhoto =
                        photoRepository.save(
                                photo
                        );


                savedPhotos.add(
                        savedPhoto
                );
            }


            return ResponseEntity.ok(
                    savedPhotos
            );


        } catch (IOException error) {

            return ResponseEntity
                    .badRequest()
                    .body(
                            "Unable to upload photos."
                    );
        }
    }


    @GetMapping("/gallery/{galleryId}")
    public ResponseEntity<?> getPhotosByGalleryId(

            @PathVariable
            String galleryId) {

        List<Photo> photos =
                photoRepository.findByGalleryId(
                        galleryId
                );

        return ResponseEntity.ok(
                photos
        );
    }
}