package com.sprouts.model;

import java.util.HashMap;
import java.util.Map;

public class Response<T> {

    private ResponseCode responseCode;
    private T body;
    private Map<String, String> errors = new HashMap<>();

    public Response(ResponseCode responseCode, T body) {
        this.responseCode = responseCode;
        this.body = body;
    }

    public Response(T body) {
        this.body = body;
    }

    public Response(ResponseCode responseCode) {
        this.responseCode = responseCode;
    }

    public ResponseCode getResponseCode() {
        return responseCode;
    }

    public T getBody() {
        return body;
    }

    public Map<String, String> getErrors() {
        return errors;
    }

    public void setErrors(Map<String, String> errors) {
        this.errors = errors;
    }

    public void addError(String field, String error) {
        errors.put(field, error);
    }

    public boolean hasError() {
        return !errors.isEmpty();
    }

    @Override
    public String toString() {
        return "Response{" +
               "responseCode=" + responseCode +
               ", body=" + body +
               '}';
    }
}
