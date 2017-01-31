package com.sprouts.model;

public class Health {
    private boolean service;
    private boolean api;

    public Health(boolean service, boolean api) {
        this.service = service;
        this.api = api;
    }

    public boolean isHealthy() {
        return this.service && this.api;
    }

    public boolean isService() {
        return service;
    }

    public boolean isApi() {
        return api;
    }
}
