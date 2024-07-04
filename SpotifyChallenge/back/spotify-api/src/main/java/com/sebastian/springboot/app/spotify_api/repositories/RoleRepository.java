package com.sebastian.springboot.app.spotify_api.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.sebastian.springboot.app.spotify_api.entities.Role;

public interface RoleRepository extends CrudRepository<Role, Long> {

    Optional<Role> findByName(String name);
    
}
