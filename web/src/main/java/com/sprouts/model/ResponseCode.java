package com.sprouts.model;

public enum ResponseCode {
    OK(0, "OK"),
    VALIDATION_FAILED(1, "Validation not passed"),
    EMPTY(2, "Empty! request"),
    UNKNOWN_ERROR(3, "Unknown error, see trace for details");

    private int code;
    private String description;

    private ResponseCode(int code, String description) {
        this.code = code;
        this.description = description;
    }

    public int getCode() {
        return this.code;
    }

    public String getDescription() {
        return this.description;
    }
}
