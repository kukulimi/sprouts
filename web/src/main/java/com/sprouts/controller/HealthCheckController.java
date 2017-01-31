package com.sprouts.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sprouts.model.Health;
import com.sprouts.model.Response;
import com.sprouts.model.ResponseCode;

/**
 * Health Check
 */
@RestController
@RequestMapping("/health")
public class HealthCheckController extends AbstractController {
    private static final Logger log = LoggerFactory.getLogger(HealthCheckController.class);

    @Override
    public void init() {
        // Nothing needed
    }

    /**
     * Create/Retrieve tap account
     */
    @RequestMapping(value = "/check", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<Response<Health>> healthCheck() {
        try {
            Health health = new Health(true, true);

            ResponseCode responseCode = ResponseCode.OK;
            HttpStatus status = HttpStatus.OK;

            if (!health.isHealthy()) {
                responseCode = ResponseCode.UNKNOWN_ERROR;
                status = HttpStatus.BAD_REQUEST;
            }

            Response<Health> response = new Response<>(responseCode, health);
            return new ResponseEntity<>(response, status);

        } catch (Exception ex) {
            log.error("Health check failed", ex);
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
