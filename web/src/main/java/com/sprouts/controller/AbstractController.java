package com.sprouts.controller;

import javax.annotation.PostConstruct;
import java.util.LinkedList;
import java.util.List;

import com.sprouts.model.Response;
import com.sprouts.model.ResponseCode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.validation.BindException;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;
import org.springframework.validation.Validator;

public abstract class AbstractController {

    private static final Logger logger = LoggerFactory.getLogger(AbstractController.class);

    /** Validator list attached to the controller */
    private List<Validator> validators = new LinkedList<>();

    /**
     * Initialization method of a controller.
     */
    @PostConstruct
    public abstract void init();

    /**
     * Register a validator to the controller.
     *
     * @param validator The validator to register.
     */
    protected void registerValidator(Validator validator) {
        validators.add(validator);
        logger.debug("Validator {} is registered.", validator.getClass());
    }

    /**
     * Unregister a validator from the controller.
     *
     * @param validator The validator to unregister.
     */
    protected void unregisterValidator(Validator validator) {
        validators.remove(validator);
        logger.debug("Validator {} is unregistered.", validator.getClass());
    }

    /**
     * Validate the input data.
     *
     * @param object The input object
     * @return Validation errors if there is any.
     */
    protected Errors validate(Object object) {
        Errors validationResult = new BindException(object, object.getClass().getSimpleName());
        for (Validator validator : validators) {
            if (validator.supports(object.getClass())) {
                validator.validate(object, validationResult);
            } else {
                logger.warn("Unsupported Validator {} is skipped.", validator.getClass());
            }
        }
        return validationResult;
    }

    /**
     * Build error REST response.
     */
    protected Response buildErrorResponse(Errors errors) {
        Response response = new Response<>(ResponseCode.VALIDATION_FAILED);
        for (ObjectError error : errors.getAllErrors()) {
            response.addError(error.getCode(), error.getDefaultMessage());
        }
        return response;
    }
}