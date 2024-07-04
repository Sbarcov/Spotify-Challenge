package com.sebastian.springboot.app.spotify_api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sebastian.springboot.app.spotify_api.entities.Track;
import com.sebastian.springboot.app.spotify_api.repositories.TrackRepository;

@Service
public class TrackServiceImpl implements TrackService {

    @Autowired
    private TrackRepository repository;

    @Override
    public Track save(Track track) {
        return repository.save(track);
      }

    @Override
    public List<Track> findByUsername(String username) {
        return repository.findByUsername(username);
    }

}
