package com.sebastian.springboot.app.spotify_api.controllers;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sebastian.springboot.app.spotify_api.spotifyclient.authSpotify;
import com.sebastian.springboot.app.spotify_api.spotifyclient.loginRequest;

import static com.sebastian.springboot.app.spotify_api.spotifyclient.spotifyConfig.*;

@RestController
@RequestMapping("/api/spotify")
public class spotifyController {

    private final authSpotify authSpotify;

    public spotifyController(authSpotify authSpotify) {
        this.authSpotify = authSpotify;
    }

    @GetMapping("/gettoken")
    public ResponseEntity<?> getSpotifyToken(){

        String encodeBytes  = "Basic " + Base64.getEncoder().encodeToString((CLIENT_ID + ":" + CLIENT_SECRET).getBytes());
        var body = new loginRequest("client_credentials");

        Map<String, String> response = new HashMap<>();
        response.put("token", authSpotify.login(encodeBytes, TYPE, body).getAccessToken());

        return ResponseEntity.status(200).body(response);
    }

}
