package com.sebastian.springboot.app.spotify_api.spotifyclient;

import feign.form.FormProperty;

public class loginRequest {

    @FormProperty("grant_type")
    private String grantType;

    public loginRequest() {
    }

    public loginRequest(String grantType) {
        this.grantType = grantType;
    }

    public String getGrantType() {
        return grantType;
    }

    public void setGrantType(String grantType) {
        this.grantType = grantType;
    }

}
