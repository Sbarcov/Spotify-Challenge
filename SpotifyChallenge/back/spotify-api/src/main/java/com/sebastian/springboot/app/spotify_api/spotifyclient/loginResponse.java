package com.sebastian.springboot.app.spotify_api.spotifyclient;

import com.fasterxml.jackson.annotation.JsonProperty;

public class loginResponse {

    @JsonProperty("access_token")
    private String accessToken;

    @JsonProperty("token_type")
    private String tokenType;

    @JsonProperty("expires_in")
    private String expires;

    public loginResponse() {
    }

    public loginResponse(String accessToken, String tokenType, String expires) {
        this.accessToken = accessToken;
        this.tokenType = tokenType;
        this.expires = expires;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public String getExpires() {
        return expires;
    }

    public void setExpires(String expires) {
        this.expires = expires;
    }

}
