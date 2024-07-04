package com.sebastian.springboot.app.spotify_api.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sebastian.springboot.app.spotify_api.entities.Track;
import com.sebastian.springboot.app.spotify_api.services.TrackService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/tracks")
public class TrackController {

    @Autowired
    private TrackService service;

    @GetMapping("/{username}")
    public List<Track> getTracks(@PathVariable String username){
        return service.findByUsername(username);
    }

    @PostMapping("/save/{username}")
    public ResponseEntity<?> saveTrack(@PathVariable String username, @Valid @RequestBody Track track, BindingResult result){
        if (result.hasFieldErrors()) {
            return validation(result);
        }
        track.setUsername(username);
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(track));
    }

    private ResponseEntity<?> validation(BindingResult result) {
        Map<String, String> errors = new HashMap<>();

        result.getFieldErrors().forEach(err -> {
            errors.put(err.getField(), err.getField() + " " + err.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(errors);
    }

}
