package com.sebastian.springboot.app.spotify_api.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.sebastian.springboot.app.spotify_api.entities.Track;

public interface TrackRepository extends CrudRepository<Track, Long> {

    List<Track> findByUsername(String username);

}
