package com.sebastian.springboot.app.spotify_api.services;

import java.util.List;

import com.sebastian.springboot.app.spotify_api.entities.User;



public interface UserService {
    
    List<User> findAll();

    User save(User user);

    boolean existsByUsername(String username);
}
