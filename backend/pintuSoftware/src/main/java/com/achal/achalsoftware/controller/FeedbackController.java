package com.achal.achalsoftware.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.achal.achalsoftware.model.FeedBack;
import com.achal.achalsoftware.repository.FeedbackRepository;

@RestController 
@CrossOrigin(origins = "http://localhost:3000") 
@RequestMapping("/api") 
public class FeedbackController {

    @Autowired 
    private FeedbackRepository feedbackRepository; 

    @PostMapping("/feedback") 
    public FeedBack submitFeedback(@RequestBody FeedBack feedback) { 
        
        return feedbackRepository.save(feedback); 

}
}
