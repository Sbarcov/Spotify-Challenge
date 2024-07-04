package com.sebastian.springboot.app.spotify_api.services;

import java.util.List;

import com.sebastian.springboot.app.spotify_api.entities.Track;

public interface TrackService {

    Track save(Track track);

    List<Track> findByUsername(String username);

}
