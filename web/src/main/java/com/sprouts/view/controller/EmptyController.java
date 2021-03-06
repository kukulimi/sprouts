package com.sprouts.view.controller;

import com.sprouts.controller.AbstractController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class EmptyController extends AbstractController {
    private static final Logger log = LoggerFactory.getLogger(EmptyController.class);

    @Override
    public void init() {
        // Nothing needed
    }

    @RequestMapping(value = "/verify", method = RequestMethod.GET)
    public ModelAndView verifyRegistration(@RequestParam String test) {
        Boolean success = Boolean.FALSE;
        String message = "test message";

        try {
	    success = Boolean.TRUE;
        } catch (Exception ex) {
            log.error("Error", ex);
            message = "Verification failed";
        }

        ModelAndView model = new ModelAndView("test");
        model.addObject("success", success);
        model.addObject("message", message);

        return model;
    }
}

