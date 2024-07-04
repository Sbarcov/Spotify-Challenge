package com.sebastian.springboot.app.spotify_api.spotifyclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.http.MediaType;

@FeignClient(
    name = "AuthSpotify",
    url = "https://accounts.spotify.com"
)

public interface authSpotify {

    @PostMapping(value = "/api/token", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    loginResponse login(@RequestHeader("Authorization") String requester,
                        @RequestHeader("Content-Type") String type,
                        @RequestBody loginRequest logRequest);

}
