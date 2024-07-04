package com.sebastian.springboot.app.spotify_api.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.sebastian.springboot.app.spotify_api.entities.User;


public interface UserRepository extends CrudRepository<User, Long>{
    
    boolean existsByUsername(String username);

    Optional<User> findByUsername(String username);
}