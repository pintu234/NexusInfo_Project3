package com.achal.achalsoftware.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.achal.achalsoftware.model.ContactInfo;
import com.achal.achalsoftware.repository.ContactRepository;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    @Autowired
    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public void saveContactInfo(ContactInfo contactInfo) {
        // Add any business logic here, such as validation or data manipulation
        
        // Save contact information to the database using the repository
        contactRepository.save(contactInfo);
    }
}
